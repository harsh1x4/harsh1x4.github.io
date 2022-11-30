import styles from '../../styles/profileCard.module.css'
import Image from 'next/image'
const ProfileCard = () => {
    return (
        <div className={styles.main}>
            <div className={styles.profile_card}>
                <a href="https://github.com/harsh1x4" className={styles.profile_img_link} target="blank">
                    <Image src="/{harsh}small.png" width={75} height={75} alt="Basic Logo" className={styles.profile_image} draggable="false"></Image>
                    {/* <Image src="/bg.svg" width={100} height={100} alt="Basic Logo" className={styles.profile_image}></Image> */}
                </a>
                <div className={styles.profile_wrapper}>
                    <span aria-label="Wave">
                        <svg className={styles.emoticon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36"><path fill="#EF9645" d="M4.861 9.147c.94-.657 2.357-.531 3.201.166l-.968-1.407c-.779-1.111-.5-2.313.612-3.093 1.112-.777 4.263 1.312 4.263 1.312-.786-1.122-.639-2.544.483-3.331a2.483 2.483 0 0 1 3.456.611l10.42 14.72L25 31l-11.083-4.042L4.25 12.625a2.495 2.495 0 0 1 .611-3.478z"></path><path fill="#FFDC5D" d="M2.695 17.336s-1.132-1.65.519-2.781c1.649-1.131 2.78.518 2.78.518l5.251 7.658c.181-.302.379-.6.6-.894L4.557 11.21s-1.131-1.649.519-2.78c1.649-1.131 2.78.518 2.78.518l6.855 9.997c.255-.208.516-.417.785-.622L7.549 6.732s-1.131-1.649.519-2.78c1.649-1.131 2.78.518 2.78.518l7.947 11.589c.292-.179.581-.334.871-.498L12.238 4.729s-1.131-1.649.518-2.78c1.649-1.131 2.78.518 2.78.518l7.854 11.454 1.194 1.742c-4.948 3.394-5.419 9.779-2.592 13.902.565.825 1.39.26 1.39.26-3.393-4.949-2.357-10.51 2.592-13.903L24.515 8.62s-.545-1.924 1.378-2.47c1.924-.545 2.47 1.379 2.47 1.379l1.685 5.004c.668 1.984 1.379 3.961 2.32 5.831 2.657 5.28 1.07 11.842-3.94 15.279-5.465 3.747-12.936 2.354-16.684-3.11L2.695 17.336z"></path><g fill="#5DADEC"><path d="M12 32.042C8 32.042 3.958 28 3.958 24c0-.553-.405-1-.958-1s-1.042.447-1.042 1C1.958 30 6 34.042 12 34.042c.553 0 1-.489 1-1.042s-.447-.958-1-.958z"></path><path d="M7 34c-3 0-5-2-5-5a1 1 0 1 0-2 0c0 4 3 7 7 7a1 1 0 1 0 0-2zM24 2a1 1 0 0 0 0 2c4 0 8 3.589 8 8a1 1 0 0 0 2 0c0-5.514-4-10-10-10z"></path><path d="M29 .042c-.552 0-1 .406-1 .958s.448 1.042 1 1.042c3 0 4.958 2.225 4.958 4.958 0 .552.489 1 1.042 1s.958-.448.958-1C35.958 3.163 33 .042 29 .042z"></path></g>
                        </svg>
                    </span>
                    <div className={styles.head_wrapper}>
                        <h1 className={styles.head}>Namaste! I'm Harshbardhan</h1>
                        <p className={styles.sub_head} >I'm a 18-year-old Student, attending online classes.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileCard