import { existsSync, mkdirSync, unlinkSync } from 'fs';
import { Downloads } from '../constants/Downloads';

export class System {
  public static createCsvFolderIfNotExists() {
    if (!existsSync(Downloads.PATH)) {
      mkdirSync(Downloads.PATH, { recursive: true });
    }
  }

  public static deleteFileIfExists(filePath: string) {
    if (existsSync(filePath)) {
      unlinkSync(filePath);
    }
  }
}
