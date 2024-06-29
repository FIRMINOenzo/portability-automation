import * as fs from 'fs';
import * as path from 'path';

const getConfig = () => {
  const configPath = path.join(__dirname, '../../config.json');
  if (!fs.existsSync(configPath)) {
    throw new Error(
      'Arquivo de configuração não encontrado. Por favor, crie um arquivo config.json na raiz do projeto.'
    );
  }

  const config = JSON.parse(fs.readFileSync(configPath, 'utf8'));

  if (!config.user?.brb?.email || !config.user?.brb?.password) {
    throw new Error(
      'Dados de login BRB não fornecidos no arquivo de configuração.'
    );
  }

  if (!config.user?.consitech?.email || !config.user?.consitech?.password) {
    throw new Error(
      'Dados de login Consitech não fornecidos no arquivo de configuração.'
    );
  }

  return config;
};

export const env = getConfig();
