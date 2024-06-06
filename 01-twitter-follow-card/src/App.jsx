import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App () {

    const timexlost = {userName: 'timexlost', name: 'Patricia', isFollowing: false}

    const users = [
        {
            userName: 'timexlost',
            name: 'Patricia',
            isFollowing: false
        },
        {
            userName: 'test1',
            name: 'test',
            isFollowing: true
        },
        {
            userName: 'test2',
            name: 'test',
            isFollowing: false
        }
    ]

    return (
        <section className="App">
            <TwitterFollowCard>
                    Patricia
            </TwitterFollowCard>

            <TwitterFollowCard  
                userName="timexlost">
                    Patricia
            </TwitterFollowCard>

            <TwitterFollowCard 
                userName="timexlost"
                name = "Patricia"
                initialIsFollowing={true}/>

            <TwitterFollowCard {... timexlost}/>  

            { /** {
                users.map(user => {
                    const {userName, name, isFollowing} = user
                    return (
                        <TwitterFollowCard 
                            userName = {userName}
                            initialIsFollowing = {isFollowing}>
                            {name}
                        </TwitterFollowCard>
                    )
                })
            } */ }
        </section>
    )

}