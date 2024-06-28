export enum BankAccountType {
  CURRENT = 'corrente',
  SAVINGS = 'poupanca',
}

const bankAccountTypeMapping = {
  CC: BankAccountType.CURRENT,
  CP: BankAccountType.SAVINGS,
};

export function getBankAccountTypeFromAcronym(
  acronym: string
): BankAccountType | null {
  return (
    bankAccountTypeMapping[acronym as keyof typeof bankAccountTypeMapping] ??
    null
  );
}
