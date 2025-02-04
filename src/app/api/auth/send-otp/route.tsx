import prisma from "@/lib/db";
import { generateRandomNumber } from "@/lib/utils";
import { sendOtpSchema } from "@/validators/auth";

export async function POST(req: Request) {
  const phone = await req.json();
  const isValidatePhone = sendOtpSchema.safeParse({ phone });
  if (!isValidatePhone.success) {
    return Response.json(
      { message: isValidatePhone.error.errors[0].message },
      { status: 422 }
    );
  }

  const code = generateRandomNumber(100_000, 999_999).toString();

  const expires_at = process.env.OTP_EXPIRATION ?? new Date(Date.now() + 90); // 90s by default;

  await prisma.otp.upsert({
    where: { phone },
    update: {
      code,
      expires_at,
      is_used: false,
    },
    create: {
      phone,
      code,
      expires_at,
    },
  });

  return Response.json({ message: "کد تایید با موفقیت ارسال گردید!", code });
}
