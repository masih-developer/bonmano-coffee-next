const ErrMsg = {
  contains: (name: string, pattern: string): string =>
    `${name} باید شامل ${pattern} باشد.`,

  endWith: (name: string, pattern: string): string =>
    `${name} باید با ${pattern} خاتمه یابد.`,

  incorrect: (name: string): string => `${name} وارد شده صحیح نمی‌باشد.`,

  max: (name: string, length: number): string =>
    `${name} باید حداکثر ${length} کاراکتر داشته باشد.`,

  min: (name: string, length: number): string =>
    `${name} باید حداقل ${length} کاراکتر داشته باشد.`,

  required: (name: string): string => `وارد کردن ${name} الزامی است.`,

  startWith: (name: string, pattern: string): string =>
    `${name} باید با ${pattern} شروع شود.`,
};

export default ErrMsg;
