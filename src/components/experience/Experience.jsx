import { useState, useEffect } from "react";
import './Experience.css'
import { SlCalender } from "react-icons/sl"


const Experience = ({ state }) => {
    const [education, setEducation] = useState("");

    useEffect(() => {
        const { contract } = state;
        const educationDetails = async () => {
            const education = await contract.methods.allEducationDetails().call();
            setEducation(education);
        }
        contract && educationDetails();
    }, [state])
    return (
        <section className="exp-section">
            <h1 className="title">Experience & Education </h1>

            <div className="container">

                <div className="education">
                    <h1 className="edu-title">Education</h1>
                    {education !== "" && education.map((edu) => {
                        return (
                            <div className="edu-card">
                                <p className="card-text1">
                                    <SlCalender className='icon' /> {edu.date}
                                </p>
                                <h3 className="card-text2">{edu.degree}</h3>
                                <p className="card-text3">{edu.knowledgeAcquired}</p>
                                <p className="card-text4">
                                    {edu.instutionName}
                                </p>
                            </div>)
                    })}


                </div>
                {/* experience */}
                <div className="education">
                    <h1 className="edu-title">Experience</h1>
                    <div className="edu-card">
                        <p className="card-text1">
                            <SlCalender className='icon' /> Jan 2024 - Nov 2024

                        </p>
                        <h3 className="card-text2"> Volunteer at MATCOM</h3>
                        <p className="card-text3">- Actively participated in organizing tech events and guest sessions during NIMBUS 2024 <br></br>
                            - Developed abilities such as collaboration and community service</p>
                        <p className="card-text4">

                        </p>
                    </div>
                    {/* card2 */}
                    <div className="edu-card">
                        <p className="card-text1">
                            <SlCalender className='icon' /> Dec 2024 - Present
                        </p>
                        <h3 className="card-text2">◦ Executive at MATCOM</h3>
                        <p className="card-text3">- Led the development of collaborative projects, to enhance technical skills among members and
                            encourage hands-on learning <br></br>
                            - Mentored junior members by organizing regular technical sessions and code reviews</p>
                        <p className="card-text4">

                        </p>
                    </div>
                    {/* card3 */}
                    <div className="edu-card">
                        <p className="card-text1">
                            <SlCalender className='icon' /> March 2013 - Present
                        </p>
                        <h3 className="card-text2">Blockchain Developer Intern</h3>
                        <p className="card-text3">learned this this and that.learned this this and that.learned this this and that.learned this this and that.</p>
                        <p className="card-text4">

                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience
