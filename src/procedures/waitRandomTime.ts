export function waitRandomTime() {
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        resolve();
      }, Math.floor(Math.random() * 5000) + 1000);
    });
  }