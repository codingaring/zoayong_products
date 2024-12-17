function debounce<T extends (...args: any[]) => any>(
  func: T,
  delay: number,
  leading: boolean = false,
): (...args: Parameters<T>) => void {
  let timer: ReturnType<typeof setTimeout> | null = null;
  let called = false;

  return function (...args: Parameters<T>): void {
    if (leading && !called) {
      func(...args);
      called = true;
    }

    if (timer) clearTimeout(timer);

    timer = setTimeout(() => {
      if (!leading) {
        func(...args);
      }
      called = false;
    }, delay);
  };
}

export default debounce;
