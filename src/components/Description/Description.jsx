import css from "./Desription.module.css"

export const Description = () => {
    return (
        <div className={css.container}>
            <h1 className={css.title}>Sip Happens Café</h1>
            <p className={css.subtitle}>Please leave your feedback about our service by selecting one of the options below.</p>
        </div>
    )
}