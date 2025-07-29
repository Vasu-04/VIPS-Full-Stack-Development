const { PrismaClient } = require('./generated/prisma');
const prisma = new PrismaClient();

async function main() {
    const user = await prisma.user.create({
        data: {
            name: 'Himanshu Jindal',
            email: 'jindalhimanshu.2004@gmail.com',
        },
    });

    console.log('User created:', user);

    const allUsers = await prisma.user.findMany();
    console.log('All users:', allUsers);
}

main()
    .catch((e) => {
        console.error(e);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });