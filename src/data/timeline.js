import sbcs from "../photos/timeline/Pic4.jpeg";
import ibmgif from "../photos/timeline/ibm.gif";
import luma from "../photos/timeline/luma.png";

const timeline = [
    {
        item_classes: "",
        bar_color: "b-primary",
        date: "Summer 2016",
        title: "Getting Started",
        content: "My journey in tech started in 2016. I joined a 10-week program with South Bend Code School designed to teach web development to students ages 7-18. The following summer, I returned to SBCS as an instructor.",
        subtexts: ["South Bend Code School", "South Bend, IN"],
        image: sbcs,
        link: "https://southbendcodeschool.com/",
        linkText: "southbendcodeschool.com"
    },
    {
        bar_color: "b-primary",
        date: "August 2016",
        title: "First Internship",
        image: luma,
        content: "My first internship was with Luma Brighter Learning, as a web developer, building online courseware for universities around the US. Who knew that virtual school materials would be so crucial today?!",
        subtexts: ["Luma", "Notre Dame, IN"]
    },
    {
        bar_color: "b-primary",
        date: "June 2018",
        title: "Senior Year",
        content: "After high school, I decided to continue my education and career in tech at Indiana University-Bloomington studying Computer Science.",
        subtexts: ["South Bend, IN"],
        image: "https://assets.simpleviewinc.com/simpleview/image/upload/c_fill,g_xy_center,h_573,q_60,w_573,x_1728,y_1417/v1/clients/bloomington/SampleGatesFall_Sunrise_10_edit_2f20bd0e-3463-416b-98ad-f45f347e29d1.jpg"
    },
    {
        item_classes: "active",
        bar_color: "b-primary",
        date: "May 2019",
        title: "Future Wonder",
        content: "Began working at Future Wonder CO. as a Tech Consulting Intern, and then eventually as a Post-Intern throughout college",
        subtexts: ["Future Wonder Co.", "Bloomington, IN"],
        linkText: "futurewonder.com",
        link: "https://www.futurewonder.com/"
    },
    {
        item_classes: "",
        bar_color: "b-primary",
        date: "Summer 2021",
        title: "IBM",
        content: "Began working at IBM as a Frontend Development Intern. I worked remotely in the CIO domain out of the Austin, TX office.",
        subtexts: ["IBM", "Austin, TX (remote)", "worked from Honolulu, HI"],
        image: "http://antunovich.com//upload/projects/207/764141798_ibm004_medium.jpg"
        // image: "https://www.consultancy.uk/media/IBM-Studio-London-14866.jpg"
    },
    {
        item_classes: "active",
        bar_color: "b-primary",
        date: "May 2022",
        title: "College Grad!",
        content: "After 4 long years, I graduated from Indiana University with a degree in Computer Science and minor in Business!",
        subtexts: ["Luddy School of Informatics, Computing, and Engineering", "Indiana University-Bloomington"],
        image: "https://pbs.twimg.com/media/DasCVJ1XUAIkcog.jpg"
    },
    {
        item_classes: "",
        bar_color: "b-primary",
        date: "2022",
        title: "Back to Work!",
        content: "After pondering grad school for a while, I decided to accept a full time offer as a Software Engineer back with IBM.",
        subtexts: ["IBM", "Austin, TX"],
        image: ibmgif
    },
    {
        item_classes: "",
        bar_color: "b-primary",
        date: "Now",
        title: "What's Next?",
        content: "Now, I'm looking for my next adventure...",
        subtexts: []
    }
]


// <p></p>
// <p>In college, I had more exposure to the tech industry through research, independent study, and other internships. I worked as a Tech Consulting Intern with Future Wonder which provided me my first industry level project and experience.</p>
// <p>Most recently, I have worked as a Software Developer Intern at IBM. And upon graduation, I hope to continue my career as a Full Stack Developer.</p>

export default timeline;