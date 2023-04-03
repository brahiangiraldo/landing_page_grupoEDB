import { FooterProps } from './Footer.Props'
import './footer.scss'

const Footer = ({ color }: FooterProps) => {
	return (

		<footer className='footer'>
			<div>
				<svg width="1448" height="418" viewBox="0 0 1448 418" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path fill-rule="evenodd" clip-rule="evenodd" d="M0 0L40.2222 47C112.448 132.5 160.889 186 241.333 194C321.778 201 402.222 124 482.667 101C563.111 78 643.556 109 724 147C804.444 186 884.889 232 965.333 240C1045.78 248 1104.24 254 1206.67 211.5C1324.99 167 1394.21 110 1434.44 79L1448 65.5V418H1407.78C1367.56 418 1287.11 418 1206.67 418C1126.22 418 1045.78 418 965.333 418C884.889 418 804.444 418 724 418C643.556 418 563.111 418 482.667 418C402.222 418 321.778 418 241.333 418C160.889 418 80.4444 418 40.2222 418H0V0Z"
						fill={ color } />
				</svg>
			</div>


			<div className="back">
				<div className='columns'>
					<span className='fonttitle'>Medellin, Colombia 2023</span>
					<p>ofrece servicios, para diferentes areas de finanzas, marketing,
						desarrollo. Somos una alianza entre muchas marcas destinadas a suplir tus
						necesidades.
					</p>

					<span className='fonttitle'>Trabaja con nosotros</span>
					<p>Ofrecemos empleos en diferentes ramas donde priorizamos la salud mental
						de los empleados, brindamos la mejor experiencia para que te sientas comodo
					</p>

					<div className='containers' >

						<svg width="62" height="47" viewBox="0 0 62 47" fill="none" xmlns="http://www.w3.org/2000/svg">
							<ellipse cx="7.6887" cy="7.83337" rx="6.82737" ry="7.83337" fill="#4374DD" />
							<rect x="9.96484" y="4.6582" width="25.2182" height="6.35138" fill="#4374DD" />
							<ellipse cx="39.3039" cy="7.83337" rx="6.82737" ry="7.83337" fill="#4374DD" />
							<ellipse cx="23.5569" cy="23.5004" rx="6.82737" ry="7.83337" fill="#4374DD" />
							<rect x="25.833" y="20.3242" width="25.2182" height="6.35138" fill="#4374DD" />
							<ellipse cx="55.1731" cy="23.5004" rx="6.82737" ry="7.83337" fill="#4374DD" />
							<ellipse cx="6.82737" cy="39.1664" rx="6.82737" ry="7.83337" fill="#4374DD" />
							<rect x="9.10254" y="35.9912" width="25.2182" height="6.35138" fill="#4374DD" />
							<ellipse cx="38.4426" cy="39.1664" rx="6.82737" ry="7.83337" fill="#4374DD" />
						</svg><span className='fontsubtitle'>GRUPO EDB</span>

					</div>

					<p>Contamos con expertos en cada área que trabajan juntos para ofrecer soluciones
						personalizadas y efectivas para mejorar la eficiencia la rentabilidad y crecimiento.
					</p>
				</div>
			</div>
			<span className='fonthead'>GRUPO EDB</span>



		</footer>

	)
}
export default Footer;


