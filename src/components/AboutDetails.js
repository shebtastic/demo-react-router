import { useParams } from "react-router-dom"

function AboutDetails() {
    const {name, job} = useParams()

    return (
        <>
        <p>{name}</p>
        <p>{job}</p>
        </>
    )
}

export default AboutDetails