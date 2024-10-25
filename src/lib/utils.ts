import { UserWithoutPassword } from '@/types'
import { PrismaClient } from '@prisma/client'
import { NextAuthOptions, User } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

export const nextAuthOptions: NextAuthOptions = {
    session: {
        maxAge: 8 * 60 * 60, // 8 hours
    },
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                email: {
                    label: 'Email',
                    type: 'email',
                    placeholder: 'email@email.com',
                },
                password: {
                    label: 'Password',
                    type: 'password',
                    placeholder: '********',
                },
            },
            async authorize(credentials, req) {
                try {
                    const prisma = new PrismaClient()

                    const user = await prisma.usuarios.findUnique({
                        where: {
                            USR_EMAIL: credentials!.email
                        }
                    })

                    if (!user || user.USR_SENHA != credentials!.password) {
                        return null
                    }

                    const loggedUser: any = user
                    loggedUser.id = user.USR_ID
                    delete loggedUser.USR_ID

                    const { USR_SENHA, ...rest } = loggedUser

                    return rest
                } catch (error) {
                    const errorMessage =
                        error instanceof Error ? error.message : 'An unknown error occurred'

                    throw new Error(errorMessage)
                }
            },
        }),
    ],
    pages: {
        signIn: '/sign-in',
    },
    callbacks: {
        async jwt({ token, user, session, trigger }) {
            if (user) {
                token.user = user
            } else if (trigger === 'update' && session) {
                token.user = session.user
            }

            return token
        },
        async session({ session, token }) {
            session.user = token.user as UserWithoutPassword

            return session
        },
    },
}
