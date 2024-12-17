function debounce<T extends (...args: any[]) => any>(
  func: T,
  delay: number,
  leading: boolean = false,
): (...args: Parameters<T>) => void {
  let timer: ReturnType<typeof setTimeout> | null = null;
  let called = false;

  return function (this: ThisParameterType<T>, ...args: Parameters<T>): void {
    const context = this;

    if (leading && !called) {
      func.apply(context, args);
      called = true;
    }

    if (timer) clearTimeout(timer);

    timer = setTimeout(() => {
      if (!leading) {
        func.apply(context, args);
      }
      called = false;
    }, delay);
  };
}

export default debounce;
