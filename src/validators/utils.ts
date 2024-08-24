export default class ErrMsg {
  private constructor() {}

  public static required(name: string): string {
    return `وارد کردن ${name} الزامی است.`;
  }

  public static min(name: string, length: number): string {
    return `${name} باید حداقل ${length} کاراکتر داشته باشد.`;
  }

  public static max(name: string, length: number): string {
    return `${name} باید حداکثر ${length} کاراکتر داشته باشد.`;
  }

  public static incorrect(name: string): string {
    return `${name} وارد شده صحیح نمی‌باشد.`;
  }

  public static startWith(name: string, pattern: string): string {
    return `${name} باید با ${pattern} شروع شود.`;
  }

  public static contains(name: string, pattern: string): string {
    return `${name} باید شامل ${pattern} باشد.`;
  }

  public static endWith(name: string, pattern: string): string {
    return `${name} باید با ${pattern} خاتمه یابد.`;
  }
}
