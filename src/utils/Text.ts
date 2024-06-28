export function removeAccents(value: string): string {
  return value.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

export function filterNumbers(value: string): string {
  return value.replace(/\D/g, '');
}
