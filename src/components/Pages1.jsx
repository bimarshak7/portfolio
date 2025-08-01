import {
	AiFillMail,
	AiFillPhone,
	AiFillLinkedin,
	AiFillGithub,
} from "react-icons/ai"
import { BiSolidMedal } from "react-icons/bi"
import { SiX } from "react-icons/si"
import { Link } from "react-router-dom"
import LogoD from "./kitty.png"
import LogoL from "./kitty-light.png"
import { FaCode, FaRobot, FaCogs, FaDatabase, FaTools, FaServer, FaLightbulb, FaUserGraduate, FaEnvelope, FaTrophy, FaFolderOpen } from "react-icons/fa"

const Home = ({ theme }) => {
	return (
		<div className={`flex flex-col md:flex-row items-center gap-8 rounded-xl shadow-xl p-8 md:p-12 transition-all duration-300 hover:shadow-2xl ${theme ? 'bg-gradient-to-br from-green-900/30 via-black/10 to-blue-900/20 text-white' : 'bg-gradient-to-br from-white via-blue-50 to-green-100 text-black'}`}>
			<div className="flex flex-col gap-4 items-start flex-1">
				<h1 className={`text-3xl md:text-5xl font-extrabold animate-pulse drop-shadow-lg ${theme ? 'text-green-400' : 'text-green-700'}`}>Hey hooman! <span className={`${theme ? 'text-blue-400' : 'text-blue-700'}`}>How you doin?</span></h1>
				<p className={`text-lg md:text-2xl font-mono leading-relaxed ${theme ? 'text-white/80' : 'text-gray-800'}`}>Welcome to my digital space. I’m <span className={`${theme ? 'text-green-300 font-bold' : 'font-bold text-green-800'}`}>Bimarsha Khanal</span>, a passionate <span className={`${theme ? 'text-blue-300 font-bold' : 'font-bold text-blue-800'}`}>Machine Learning Engineer</span> and creative problem solver. Dive in to explore my journey, skills, and projects!</p>
				<div className="flex gap-4 mt-2">
					<a href="#/about" className="bg-green-700 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full shadow transition-all duration-200">About Me</a>
					<a href="#/showcase" className="bg-blue-700 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full shadow transition-all duration-200">Showcase</a>
				</div>
			</div>
			<div className="flex flex-col items-center flex-1">
				<img
					src={theme ? LogoD : LogoL}
					alt="Bimarsha Khanal"
					className="w-40 h-40 md:w-56 md:h-56 rounded-full border-4 border-green-400 shadow-lg object-cover bg-white mb-2 animate-float"
				/>
				<span className={`${theme ? 'text-green-200' : 'text-black'} text-sm mt-2`}>AI Enthusiast | Coder | Explorer</span>
			</div>
		</div>
	)
}

const About = ({ theme }) => {
	return (
		<div className={`flex flex-col gap-4 text-left rounded-lg shadow-lg p-6 transition-all duration-200 hover:shadow-2xl ${theme ? 'bg-blue-900/10 text-white' : 'bg-gradient-to-br from-blue-100 via-white to-blue-200 text-blue-900'}`}>
			<SectionTitle icon={<FaUserGraduate />} title="About" accent="blue" />
			<div className="flex flex-col md:flex-row gap-6 items-start">
				<div className="flex-1 flex flex-col gap-2">
					<h2 className={`text-2xl font-bold mb-1 ${theme ? 'text-blue-300' : 'text-blue-800'}`}>Bimarsha Khanal</h2>
					<p className={`text-base md:text-lg font-mono ${theme ? 'text-blue-100' : 'text-blue-900'}`}>AI/ML Engineer | Researcher | Problem Solver</p>
					<div className="flex flex-wrap gap-4 mt-2">
						<span className={`px-3 py-1 rounded-full text-xs font-semibold ${theme ? 'bg-blue-800/40 text-blue-200' : 'bg-blue-200 text-blue-800'}`}>Pokhara, Nepal</span>
						<span className={`px-3 py-1 rounded-full text-xs font-semibold ${theme ? 'bg-blue-800/40 text-blue-200' : 'bg-blue-200 text-blue-800'}`}>Computer Engineering</span>
						<span className={`px-3 py-1 rounded-full text-xs font-semibold ${theme ? 'bg-blue-800/40 text-blue-200' : 'bg-blue-200 text-blue-800'}`}>Tribhuvan University, IOE</span>
					</div>
				</div>
				<div className="flex-1 flex flex-col gap-2 items-center">
					<img src={theme ? LogoD : LogoL} alt="Bimarsha Khanal" className="w-32 h-32 rounded-full border-4 border-blue-400 shadow-md mb-2 bg-white object-cover" />
					<span className={`text-xs ${theme ? 'text-blue-200' : 'text-blue-700'}`}>(That's me!)</span>
				</div>
			</div>
			<div className={`mt-4 text-base md:text-lg leading-relaxed ${theme ? 'text-blue-100' : 'text-blue-900'}`}>
				<p>
					I am a passionate and driven Machine Learning Engineer with a strong foundation in computer engineering and a love for solving real-world problems using AI. My journey in tech began with curiosity and has grown into a deep commitment to research, innovation, and collaborative development.
				</p>
				<ul className="list-disc ml-6 mt-2 space-y-1">
					<li>Experienced in building and deploying end-to-end ML systems for document understanding, NLP, and computer vision.</li>
					<li>Skilled in designing scalable APIs and integrating ML pipelines into production environments.</li>
					<li>Strong communicator, able to bridge the gap between technical and non-technical stakeholders.</li>
					<li>Active contributor to open-source and tech communities, always eager to learn and share knowledge.</li>
				</ul>
				<p className="mt-2">
					When I’m not coding, you’ll find me exploring new research papers, mentoring juniors, or enjoying the natural beauty of Nepal.
				</p>
			</div>
		</div>
	)
}

const skillData = [
	{
		title: "Programming Languages",
		icon: <FaCode className="text-green-400 inline mr-2" />,
		items: ["Python", "C++", "JavaScript", "Bash"],
	},
	{
		title: "Machine Learning & AI",
		icon: <FaRobot className="text-blue-400 inline mr-2" />,
		items: [
			"Machine Learning and Deep Learning methodologies (CNNs, RNNs, Transformers)",
			"Retrieval-Augmented Generation (RAG, LLMs and VLMs)",
			"Mathematical Foundations for ML",
		],
	},
	{
		title: "Frameworks & Libraries",
		icon: <FaCogs className="text-yellow-400 inline mr-2" />,
		items: [
			"PyTorch", "TensorFlow", "Scikit-learn", "Transformers (Hugging Face)", "OpenCV", "NLTK", "ONNX", "vLLM", "NumPy", "Pandas", "Matplotlib"
		],
	},
	{
		title: "Data Handling & Processing",
		icon: <FaDatabase className="text-purple-400 inline mr-2" />,
		items: [
			"Data Preprocessing", "Data Visualization", "Web Scraping", "SQL & NoSQL Databases", "Vector Databases"
		],
	},
	{
		title: "Software Engineering",
		icon: <FaServer className="text-pink-400 inline mr-2" />,
		items: [
			"Object-Oriented Programming", "RESTful APIs", "Version Control", "Linux Environment", "Containerization (Docker)"
		],
	},
	{
		title: "Tools & Platforms",
		icon: <FaTools className="text-orange-400 inline mr-2" />,
		items: ["Jupyter Notebook", "Postman", "AWS (EC2, Lambda, S3)", "GitHub"],
	},
	{
		title: "Software Development",
		icon: <FaCogs className="text-teal-400 inline mr-2" />,
		items: ["Flask", "FastAPI", "Streamlit", "Node.js", "ReactJS"],
	},
	{
		title: "Other Skills",
		icon: <FaLightbulb className="text-yellow-300 inline mr-2" />,
		items: ["Research-Oriented Problem Solving", "Technical Communication", "Collaborative Development"],
	},
]

const SectionTitle = ({ icon, title, accent = "green" }) => (
  <div className="flex items-center gap-3 mb-2">
    <span className={`text-2xl md:text-3xl text-${accent}-400`}>{icon}</span>
    <span className={`text-xl md:text-2xl font-bold bg-${accent}-900/20 px-3 py-1 rounded`}>{title}</span>
    <div className={`flex-1 h-1 ml-3 rounded bg-gradient-to-r from-${accent}-400/60 to-transparent`} />
  </div>
)

const Skills = () => {
	return (
		<div className="flex flex-col gap-4 text-left pt-4">
			<SectionTitle icon={<FaCogs />} title="Skills" accent="green" />
			<div className="grid md:grid-cols-2 gap-4">
				{skillData.map((cat, idx) => (
					<div key={cat.title} className="bg-zinc-800/60 hover:bg-zinc-700/80 transition-all duration-200 rounded-lg shadow-md p-4 flex flex-col gap-2 break-words overflow-hidden">
						<div className="flex items-center gap-2 text-lg font-semibold">
							{cat.icon}
							<span>{cat.title}</span>
						</div>
						<div className="flex flex-wrap gap-2 mt-1">
							{cat.items.map((item, i) => (
								<span key={i} className="bg-green-900/30 text-green-200 px-2 py-1 rounded text-xs md:text-sm font-mono whitespace-normal break-words">
									{item}
								</span>
							))}
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

const Contact = ({ theme }) => {
	return (
		<div className={`flex flex-col md:flex-row gap-8 rounded-xl shadow-xl p-8 md:p-12 transition-all duration-300 hover:shadow-2xl ${theme ? 'bg-gradient-to-br from-pink-900/30 via-black/10 to-blue-900/20 text-white' : 'bg-gradient-to-br from-pink-100 via-white to-blue-100 text-pink-900'}`}>
			<div className="flex-1 flex flex-col gap-4 justify-center">
				<SectionTitle icon={<FaEnvelope />} title="Contact" accent="pink" />
				<p className={`text-lg md:text-xl font-mono leading-relaxed ${theme ? 'text-white/80' : 'text-pink-900'}`}>Feel free to reach out for collaboration, mentorship, or just a friendly chat! I’m always open to new opportunities and connections.</p>
				<div className={`flex flex-col gap-3 mt-2 text-base md:text-lg ${theme ? 'text-white' : 'text-pink-900'}`}>
					<a href="mailto:bimarsha.work@gmail.com" className="flex items-center gap-2 transition-colors"><AiFillMail fontSize={27} /> bimarsha.work@gmail.com</a>
					<a href="https://www.linkedin.com/in/bimarshakhanal/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 transition-colors"><AiFillLinkedin fontSize={26} /> bimarshakhanal</a>
					<a href="https://www.github.com/bimarshak7/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 transition-colors"><AiFillGithub fontSize={26} /> bimarshak7</a>
					<a href="https://www.twitter.com/bimarshak7/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 transition-colors"><SiX fontSize={26} /> bimarshak7</a>
				</div>
			</div>
			<div className="flex-1 flex flex-col items-center justify-center">
				<div className={`rounded-full p-6 shadow-lg animate-float ${theme ? 'bg-pink-900/20' : 'bg-pink-100'}`}>
					<FaEnvelope className={`${theme ? 'text-pink-400' : 'text-pink-700'} text-6xl md:text-7xl`} />
				</div>
				<span className={`text-sm mt-4 ${theme ? 'text-pink-200' : 'text-pink-800'}`}>Let’s connect and create something amazing!</span>
			</div>
		</div>
	)
}

const Experience = () => {
	return (
		<div className="flex flex-col gap-8 bg-gradient-to-br from-yellow-900/30 via-black/10 to-orange-900/20 rounded-xl shadow-xl p-8 md:p-12 transition-all duration-300 hover:shadow-2xl">
			<SectionTitle icon={<FaCogs />} title="Experience" accent="yellow" />
			{/* Experience Card 1 */}
			<div className="bg-yellow-800/20 rounded-lg shadow-md p-5 flex flex-col gap-2 hover:scale-[1.01] hover:shadow-lg transition-transform duration-200 border-l-4 border-yellow-400">
				<div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1">
					<div className="flex items-center gap-2 font-bold text-base md:text-lg text-yellow-200">
						<span>Machine Learning Engineer</span>
						<span className="hidden md:inline-block text-xs font-normal text-yellow-100">| Kathmandu, Nepal</span>
					</div>
					<div className="flex items-center gap-2 text-sm md:text-base text-yellow-100 font-mono">
						<span>Fusemachines</span>
						<span className="hidden md:inline-block">|</span>
						<span>March 2024 - Present</span>
					</div>
				</div>
				<ul className="list-disc ml-6 mt-2 text-yellow-50 space-y-1 text-sm md:text-base">
					<li>Developed an AI-powered pipeline for key-value extraction from handwritten forms and financial documents, automating data processing and improving accuracy.</li>
					<li>Designed, trained, and fine-tuned machine learning models, including document classifiers, language models, handwriting recognition systems and language transliteration models, to enhance automated data extraction, text recognition, and document categorization.</li>
					<li>Built and deployed end-to-end ML systems with APIs for efficient parallel document processing.</li>
					<li>Collaborated with cross-functional teams to integrate the ML pipeline seamlessly into the system while communicating technical feasibilities and concepts to stakeholders, including clients, ensuring clarity for both technical and non-technical audiences.</li>
				</ul>
			</div>
			{/* Experience Card 2 */}
			<div className="bg-yellow-800/10 rounded-lg shadow-md p-5 flex flex-col gap-2 hover:scale-[1.01] hover:shadow-lg transition-transform duration-200 border-l-4 border-yellow-300">
				<div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1">
					<div className="flex items-center gap-2 font-bold text-base md:text-lg text-yellow-100">
						<span>Machine Learning Intern</span>
						<span className="hidden md:inline-block text-xs font-normal text-yellow-50">| Pokhara, Nepal</span>
					</div>
					<div className="flex items-center gap-2 text-sm md:text-base text-yellow-50 font-mono">
						<span>Dakshya AI</span>
						<span className="hidden md:inline-block">|</span>
						<span>Aug 2023 - Sept 2023</span>
					</div>
				</div>
				<ul className="list-disc ml-6 mt-2 text-yellow-50 space-y-1 text-sm md:text-base">
					<li>Worked with CTO to gain knowledge about existing AutoML systems and their scopes especially in SaaS business.</li>
					<li>Designed and implemented machine learning pipeline consisting of data preprocessing, feature selection and hyperparameter tuning to integrate into AutoML system.</li>
					<li>Developed a REST API using Flask enabling use of machine learning services by rest of the system.</li>
				</ul>
			</div>
		</div>
	)
}

const Achievements = () => {
	return (
		<div className="flex flex-col md:flex-row gap-8 bg-gradient-to-br from-orange-900/30 via-black/10 to-yellow-900/20 rounded-xl shadow-xl p-8 md:p-12 transition-all duration-300 hover:shadow-2xl">
			<div className="flex-1 flex flex-col gap-4 justify-center">
				<SectionTitle icon={<FaTrophy />} title="Achievements" accent="orange" />
				<h2 className="text-lg md:text-xl font-bold text-orange-300 mb-2">Participations</h2>
				<ul className="md:text-base text-sm space-y-2">
					<li className="flex items-center gap-2 bg-orange-800/30 rounded px-3 py-1">
						Leapfrog Revampthon-2023 <BiSolidMedal className="text-[#c0c0c0] text-base md:text-2xl" />
					</li>
					<li className="flex items-center gap-2 bg-yellow-800/30 rounded px-3 py-1">
						Ethos Hack (Cultural Hackathon)-2023 <BiSolidMedal className="text-yellow-500 text-xl md:text-2xl" />
					</li>
					<li className="flex items-center gap-2 bg-orange-800/30 rounded px-3 py-1">
						Techparva Datathon-2023 <BiSolidMedal className="text-[#c0c0c0] text-base md:text-2xl" />
					</li>
					<li className="bg-orange-800/20 rounded px-3 py-1">Vertex Hacks Chapter Alpha-2023 (Finalist)</li>
					<li className="bg-orange-800/20 rounded px-3 py-1">U-Tech Hackathon Alpha - 2022</li>
				</ul>
				<h2 className="text-lg md:text-xl font-bold text-orange-300 mt-6 mb-2">Involvements</h2>
				<ul className="ml-2 md:text-base text-sm list-disc space-y-2">
					<li className="bg-orange-800/20 rounded px-3 py-1">Fusemachines AI Fellowship 2023</li>
					<li className="bg-orange-800/20 rounded px-3 py-1">Leapfrog Student Partner -2023</li>
					<li className="bg-orange-800/20 rounded px-3 py-1">Machine Learning Mentor -2023</li>
				</ul>
				<p className="indent-3 mt-2 text-orange-100 bg-orange-900/10 rounded px-3 py-2">
					Volunteered as a mentor for a month-long Call for Enthusiast program, guiding juniors from my college in Machine Learning. We provided insights, support, and guidance to foster their learning and development.
				</p>
			</div>
			<div className="flex-1 flex flex-col items-center justify-center">
				<div className="bg-orange-900/20 rounded-full p-6 shadow-lg animate-float">
					<FaTrophy className="text-orange-400 text-6xl md:text-7xl" />
				</div>
				<span className="text-orange-200 text-sm mt-4">Proud moments & community impact!</span>
			</div>
		</div>
	)
}

const Showcase = () => {
	return (
		<div className="flex flex-col md:flex-row gap-8 bg-gradient-to-br from-teal-900/30 via-black/10 to-blue-900/20 rounded-xl shadow-xl p-8 md:p-12 transition-all duration-300 hover:shadow-2xl">
			<div className="flex-1 flex flex-col gap-4 justify-center">
				<SectionTitle icon={<FaFolderOpen />} title="Showcase" accent="teal" />
				<p className="text-lg md:text-xl text-white/80 font-mono leading-relaxed mb-2">
					A selection of my favorite projects and experiments in AI, ML, and software engineering. Explore the highlights below!
				</p>
				<ul className="text-base md:text-lg list-disc space-y-2">
					<li className="bg-teal-800/30 rounded px-3 py-1">Old photo restoration using GAN</li>
					<li className="bg-teal-800/20 rounded px-3 py-1">Next word prediction using n-grams model (Nepali)</li>
					<li className="bg-teal-800/30 rounded px-3 py-1">Extractive Nepali text summarizer using K-means clustering and word2vec embedding</li>
					<li className="bg-teal-800/20 rounded px-3 py-1">Yoga Pose Classification using CNN</li>
					<li className="bg-teal-800/30 rounded px-3 py-1">Nepali Cultural Dress and Ornaments Detection</li>
					<li className="bg-teal-800/20 rounded px-3 py-1">Liver Cirrhosis Stage Prediction</li>
					<li className="bg-teal-800/30 rounded px-3 py-1">Nepali Handwriting Classification using ANN from scratch</li>
					<li className="bg-teal-800/20 rounded px-3 py-1">Social media app using Flask and ReactJS</li>
					<li className="bg-teal-800/30 rounded px-3 py-1">Web based shortest path visualizer and sudoku solver</li>
				</ul>
			</div>
			<div className="flex-1 flex flex-col items-center justify-center">
				<div className="bg-teal-900/20 rounded-full p-6 shadow-lg animate-float">
					<FaFolderOpen className="text-teal-400 text-6xl md:text-7xl" />
				</div>
				<span className="text-teal-300 text-s mt-6">Want to see more?</span>
				<a href="https://github.com/bimarshak7" target="_blank" rel="noopener noreferrer" className="text-teal-200 text-xs underline hover:text-teal-400 transition-colors mt-1">Visit my GitHub</a>
			</div>
		</div>
	)
}

export { Home, About, Contact, Experience, Showcase, Skills, Achievements }
