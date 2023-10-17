import {
	AiFillMail,
	AiFillPhone,
	AiFillLinkedin,
	AiFillGithub,
	AiFillTwitterSquare,
} from "react-icons/ai"

const Home = () => {
	return (
		<div className="flex flex-col gap-4 text-left">
			<h1 className="font-bold text-2xl">Dear hooman,</h1>
			<div className="indent-4 flex flex-col gap-2 text-xl">
				<h1>नमस्ते !</h1>
				<h1>Hello !</h1>
				<h1>Hola !</h1>
				<h1>Bonjour !</h1>
				<h1>Konnichiwa !</h1>
			</div>
			<h1 className="font-bold text-2xl">How you doin?</h1>
		</div>
	)
}

const About = () => {
	return (
		<div className="flex flex-col gap-4 text-left">
			<h1 className="text-2xl font-bold">About</h1>
			<div className="text-lg flex flex-col gap-1">
				<h2>Name: Bimarsha Khanal</h2>
				<h2>Address: Pokhara, Nepal</h2>
				<h2>Education:</h2>
				<h2 className="ml-4 text-base">
					Computer Engineering(8th Sem)
					<br />
					Tribuvan Univerity, IOE <br />
					Paschimanchal Campus
				</h2>
				<p className="leading-6">
					Highly motivated final year student with great self-learning
					and quick adapting capability. Passionate about
					AI/ML,currently working to sharpen Machine Learning skills
					and looking for opportunities to grow as an AI professional.
				</p>
			</div>
		</div>
	)
}
const Skills = () => {
	return (
		<div className="flex flex-col gap-4 text-left">
			<h1 className="font-bold">Skills</h1>
			<ul className="ml-2 list-disc text-xl">
				<li>Python, C++, Javascript</li>
				<li>
					Pytorch, TensorFlow, Scikit-learn, OpenCV, NLTK, Pandas,
				</li>
				<li>Flask, NodeJS, ReactJS</li>
				<li>Machine Learning and Deep Learning Algortihms</li>
				<li>
					Data Preprocessing, EDA, Vizualization, Feature Engineering
				</li>
				<li>OOP, Data Structure and algortihm, Database</li>
				<li>Version Control, Linux, Docker</li>
			</ul>
		</div>
	)
}

const Contact = () => {
	return (
		<div className="flex flex-col gap-6 text-left contact">
			<h1 className="font-bold">Contact</h1>
			<h2 className="flex gap-2">
				<AiFillMail fontSize={27} />
				<a href="mailto:bimarsha.work@gmail.com">
					bimarsha.work@gmail.com
				</a>
			</h2>
			<h2 className="flex gap-2">
				<AiFillPhone /> +977 9840294181
			</h2>
			<h2 className="flex gap-2">
				<AiFillLinkedin fontSize={26} />
				<a
					href="https://www.linkedin.com/in/bimarshakhanal/"
					target={"new"}
				>
					bimarshakhanal
				</a>
			</h2>
			<h2 className="flex gap-2">
				<AiFillGithub fontSize={26} />
				<a href="https://www.github.com/bimarshak7/" target={"new"}>
					bimarshak7
				</a>
			</h2>
			<h2 className="flex gap-2">
				<AiFillTwitterSquare fontSize={26} />
				<a href="https://www.twitter.com/bimarshak7/" target={"new"}>
					bimarshak7
				</a>
			</h2>
		</div>
	)
}

const Experience = () => {
	return (
		<div className="flex flex-col gap-4 text-left">
			<h1 className="font-bold">Experience</h1>
			<div className="flex flex-col gap-1">
				<h2 className="text-lg font-bold">Machine Learning Intern</h2>
				<p className="text-base ml-3">
					Dakshya AI <br />
					Pokhara, Nepal
					<br /> Aug 2023 - Sept 2023
				</p>
				<ul className="list-disc ml-4 text-base">
					<li>
						Worked with CTO to gain knowledge about existing AutoML
						systems and their scopes especially in SaaS business.
					</li>
					<li>
						Designed and Implement machine learning pipeline
						consisting of data preprocessing, feature selection and
						hyperparameter tuning to integrate into AutoML system
					</li>
					<li>
						Developed a REST API using Flask enabling use of machine
						learning services by rest of the system.
					</li>
				</ul>
			</div>
		</div>
	)
}

const Showcase = () => {
	return (
		<div className="flex flex-col gap-4 text-left">
			<h1 className="font-bold">Showcase</h1>
			<h2>Bimarsha Khanal</h2>
		</div>
	)
}

export { Home, About, Contact, Experience, Showcase, Skills }
