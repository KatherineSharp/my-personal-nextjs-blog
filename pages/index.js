import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
return (
<Layout home>
<Head>
<title>{siteTitle}</title>
</Head>


<section className={utilStyles.headingMd}>
<p>Welcome!</p>
<p>I am actively seeking to further expand my knowledge and experience base with new challenges where I can utilise some of my current skills and experience in computer technology.</p>
Here is my{' '} <a href="/posts/first-post">Blog</a>!
<p>SKILLS: MySQL, CSS/HTML, C#, Angular Basics, GIT Basics, Terminal, VS Code. Microsoft SSMS, TortoiseSVN.</p>
<p>ROLES: BI Development, Data collection/Technician, Report Writer/Designer, Data Analysis, CRM Campaign Developer, CRM Marketing Execution, Microsoft Image Composer.</p>
<p>
(Check out my{' '}
<a href="https://nextjs.org/learn">GitHub</a>.)
</p>
</section>
</Layout>
)
}

