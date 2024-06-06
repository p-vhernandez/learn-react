import { useState } from "react"

export function TwitterFollowCard ({userName = 'unknown', name, children = undefined, initialIsFollowing}) {
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing)
    
    const profilePic = 'https://unavatar.io/${userName}'
    const displayName = (name != undefined) ? name : children

    const followButtonText = isFollowing ? 'Siguiendo' : 'Seguir'
    const buttonClassName = isFollowing 
        ? 'tw-followCard-button is-following'
        : 'tw-followCard-button'

    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }
    
    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img 
                    className='tw-followCard-avatar'
                    alt="Avatar de twitter user"
                    src={profilePic} />
                <div className='tw-followCard-info'>
                    <strong>{displayName}</strong>
                    <span className='tw-followCard-username'>@{userName}</span>
                </div>
            </header>

            <aside>
                <button className={buttonClassName} onClick={handleClick}>
                    {followButtonText}
                </button>
            </aside>
        </article>
    )
}