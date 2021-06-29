import { useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router'

export default function Login() {

    const router = useRouter()

    useEffect(() => {
        const token = localStorage.getItem('token')
        if (token) router.push('/')
    }, [])

    const loginHandler = () => {
        localStorage.setItem('token','token');
        router.push('/')
    }

    return (
        <div className={styles.container}>
            <Head>
                <title>Login</title>
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>
                    Please login first
                </h1>
                
                <input type="text" className={styles.input} placeholder="Username" style={{ marginTop: "20px" }} />
                <input type="password" className={styles.input} placeholder="Password" style={{ marginTop: "10px" }} />
                <input type="submit" onClick={loginHandler} className={styles.button} value="Login" />

                <p className={styles.description}>
                    Dont have an account yet? <Link href="/register"><a style={{ fontWeight: "bold" }}>Register</a></Link>
                </p>
            </main>
        </div>
    )
}