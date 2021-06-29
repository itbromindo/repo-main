import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Register() {

    const router = useRouter()

    useEffect(() => {
        const token = localStorage.getItem('token')
        if (token) router.push('/')
    }, [])

    const registerHandler = () => {
        localStorage.setItem('token', 'token');
        router.push('/')
    }

    return (
        <div className={styles.container}>
            <Head>
                <title>Register</title>
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>
                    Registration
                </h1>

                <input type="text" className={styles.input} placeholder="Username" style={{ marginTop: "20px" }} />
                <input type="password" className={styles.input} placeholder="Password" style={{ marginTop: "10px" }} />
                <input type="submit" onClick={registerHandler} className={styles.button} value="Register" />

                <p className={styles.description}>
                    Already have an account? <Link href="/login"><a style={{ fontWeight: "bold" }}>Login</a></Link>
                </p>
            </main>
        </div>
    )
}