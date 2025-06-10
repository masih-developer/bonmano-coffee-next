import prisma from "@/lib/prisma";
import { fakerFA as faker } from "@faker-js/faker";

// Set to keep track of unique national codes
const generatedNationalCodes = new Set<string>();

function generateUniqueNationalCode(): string {
  let code: string;
  do {
    code = faker.number
      .int({ min: 1_000_000_000, max: 9_999_999_999 })
      .toString();
  } while (generatedNationalCodes.has(code));
  generatedNationalCodes.add(code);
  return code;
}

function generateIranianPhoneNumber(): string {
  const secondDigit = faker.number.int({ min: 0, max: 9 });
  const rest = faker.number.int({ min: 10000000, max: 99999999 });
  return `09${secondDigit}${rest}`;
}

function generateRandomPastDate(): Date {
  const start = new Date("2020-01-01").getTime();
  const end = new Date("2024-12-31").getTime();
  return new Date(faker.number.int({ min: start, max: end }));
}

async function main() {
  const createdAt = generateRandomPastDate();

  await prisma.user.create({
    data: {
      firstname: "مسیح",
      lastname: "عابدینی",
      username: "masih-developer",
      phone: "09111213141",
      email: "masih@example.com",
      nationalCode: "1234567899",
      isEmailVerified: true,
      isPhoneVerified: true,
      role: "ADMIN",
      createdAt,
      updatedAt: createdAt,
    },
  });

  const users = Array.from({ length: 99 }).map(() =>
    prisma.user.create({
      data: {
        firstname: faker.person.firstName(),
        lastname: faker.person.lastName(),
        username: faker.internet.username(),
        phone: generateIranianPhoneNumber(),
        email: faker.internet.email(),
        nationalCode: generateUniqueNationalCode(),
        isEmailVerified: faker.datatype.boolean(),
        isPhoneVerified: faker.datatype.boolean(),
        role: faker.datatype.boolean({ probability: 0.9 }) ? "USER" : "ADMIN",
        createdAt,
        updatedAt: createdAt,
      },
    }),
  );

  await Promise.all(users);
}

void main();
