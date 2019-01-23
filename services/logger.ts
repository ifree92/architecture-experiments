export function getLogger(name: string) {
  return (...args: any[]) => console.log(`[${name}]`, ...args);
}
