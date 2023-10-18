import {
	AiFillMail,
	AiFillPhone,
	AiFillLinkedin,
	AiFillGithub,
	AiFillTwitterSquare,
} from "react-icons/ai"
import { BiSolidMedal } from "react-icons/bi"
import { Link } from "react-router-dom"

const Home = () => {
	return (
		<div className="flex flex-col gap-4 text-center">
			<h1 className="text-2xl">Dear hooman,</h1>
			<div className="indent-4 flex flex-col gap-2 text-xl font-bold">
				<h1>नमस्ते ! </h1>
				<h1>Hola !</h1>
				<h1>Hello !</h1>
				<h1>Bonjour !</h1>
				<h1>Konnichiwa !</h1>
			</div>
			<h1 className="text-2xl font-serif">How you doin?</h1>
			<h1 className="text-2xl">Explore my world</h1>
			<h1 className="-mt-4 text-green-500 cursor-pointer text-5xl font-extrabold text-center">
				<Link to="/about">▼</Link>
			</h1>
		</div>
	)
}

const About = () => {
	return (
		<div className="flex flex-col gap-4 text-left">
			<h1 className="text-2xl font-bold">About</h1>
			<div className="md:text-lg text-sm flex flex-col gap-1">
				<h2>Name: Bimarsha Khanal</h2>
				<h2>Address: Pokhara, Nepal</h2>
				<h2>I do: AI/ML, REST API</h2>
				<h2>Education:</h2>
				<h2 className="ml-4 md:text-base text-sm">
					Computer Engineering(8th Sem)
					<br />
					Tribuvan Univerity, IOE <br />
					Paschimanchal Campus
				</h2>
				<p className="leading-6 md:text-lg text-sm">
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
			<ul className="ml-2 list-disc md:text-xl text-sm">
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
		<div className="flex flex-col gap-6 text-left contact text-sm md:text-lg">
			<h1 className="font-bold md:text-xl text-base">Contact</h1>
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
			<h3 className="font-bold md:text-xl">
				Drop a line, let's talk!{" "}
				<span className="text-xl md:text-3xl">😉</span>
			</h3>
		</div>
	)
}

const Experience = () => {
	return (
		<div className="flex flex-col gap-4 text-left">
			<h1 className="font-bold md:text-2xl">Experience</h1>
			<div className="flex flex-col gap-1">
				<h2 className="text-base md:text-lg font-bold">
					Machine Learning Intern
				</h2>
				<p className="md:text-base text-sm ml-3">
					Dakshya AI <br />
					Pokhara, Nepal
					<br /> Aug 2023 - Sept 2023
				</p>
				<ul className="list-disc ml-4 md:text-base text-sm">
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

const Achievements = () => {
	return (
		<div className="flex flex-col gap-3 text-left">
			<h1 className="font-bold">Participations</h1>
			<ul className="md:text-base text-sm">
				<li className="flex md:gap-2">
					Leapfrog Revampthon-2023{" "}
					<BiSolidMedal className="text-[#c0c0c0] text-base md:text-3xl" />
				</li>
				<li className="flex gap-2">
					Ethos Hack(Cultural Hackathon)-2023{" "}
					<BiSolidMedal className="text-yellow-500 text-xl md:text-3xl" />
				</li>
				<li className="flex gap-2">
					Techparva Datathon-2023
					<BiSolidMedal className="text-[#c0c0c0] text-base md:text-3xl" />
				</li>
				<li>Vertex Hacks Chapter Alpha-2023 (Finalist)</li>
				<li>U-Tech Hackathon Alpha - 2022</li>
			</ul>

			<h1 className="font-bold">Involvements</h1>
			<ul className="ml-2 md:text-base text-sm list-disc">
				<li>Fusemachines AI Fellowship 2023</li>
				<li>Leapfrog Student Partner -2023</li>
				<li>Machine Learning Mentor -2023</li>
				<p className="indent-3">
					Volunteered as a mentor for a month-long Call for Enthusiast
					program, guiding juniors from my college in Machine
					Learning. We provided insights, support, and guidance to
					foster their learning and development.
				</p>
			</ul>
		</div>
	)
}

const Showcase = () => {
	return (
		<div className="flex flex-col gap-4 text-left">
			<h1 className="font-bold">Showcase</h1>
			<ul className="text-base md:text-lg list-disc">
				<li>Old photo restoration using GAN</li>
				<li>Next word prediction using n-grams model(Nepali)</li>
				<li>
					Extractive Nepali text summarizer using K-means clustering
					and word2vec embedding
				</li>
				<li>Yoga Pose Classification using CNN</li>
				<li>Nepali Cultural Dress and Ornaments Detection</li>
				<li>Liver Cirrhosis Stage Prediction</li>
				<li>
					Nepali Handwriting Classification using ANN from scratch
				</li>
				<li>Social media app using Flask and ReactJS</li>
				<li>Web based shortest path visualizer and sudoku solver</li>
			</ul>
			<h3 className="text-sm">
				**Check my github repo for all these projects**
			</h3>
		</div>
	)
}

export { Home, About, Contact, Experience, Showcase, Skills, Achievements }
