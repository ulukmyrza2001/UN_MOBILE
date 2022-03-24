import React from 'react';
import styled from 'styled-components';
import media from '../../helpers/media';
import Header from '../../components/header';
import Footer from '../../components/footer';

const Container = styled.div`
	max-width: 1040px;
	margin: 0 auto;
	padding: 100px 10px;

	${media.tablet`
		padding: 100px 20px;
	`}

	${media.mobile`
		padding: 100px 22px;
	`}
`;

const Title = styled.h1`
	font-family: Mulish;
	font-weight: 800;
	font-size: 50px;
	line-height: 64px;
	text-transform: uppercase;
	color: #373f41;
	
	${media.tablet`
		font-size: 38px;
	`}
	
	${media.mobile`
		font-size: 34px;
		line-height: 40px;
	`}
`;

const SubTitle = styled.h3`
	font-family: Mulish;
	font-weight: 700;
	font-size: 24px;
	line-height: 32px;
	letter-spacing: 0.5px;
	color: #000000;
	
	${media.mobile`
		font-size: 22px;
		line-height: 36px;
	`}
`;

const TitleText = styled(SubTitle)`
	font-size: 20px;

	${media.mobile`
		font-size: 18px;
	`}
`;

const Text = styled.p`
	font-family: Mulish;
	font-weight: 500;
	font-size: 16px;
	line-height: 32px;
	letter-spacing: 0.5px;
	color: #4f4f4f;

	${media.mobile`
		font-size: 14px;
	`}
`;

const Terms = () => (
	<>
		<Header />
		<Container>
			<Title>Terms and Conditions</Title>
			<br />
			<TitleText>Terms and Conditions of use</TitleText>
			<Text>
				The United Nations Environment Programme (UNEP)
				CounterMEASURE APIs are a service provided by the United
				Nations to users of statistical data sources and pathways of
				plastic pollution in river systems in Asia, particularly the
				Mekong and the Ganges. It provides easy access to data
				compiled and produced by UN agencies and its partners. All
				partner data provided with clear partner reference is
				subject to the original source Terms of Use and this Terms
				of Use does not supersede any additional obligations under
				the partner terms.
			</Text>
			<br/>
			<TitleText>Open Data Policy</TitleText>
			<Text>
				The UNEP CounterMEASURE program provides data in alignment
				to an Open Data Policy to ensure the transparent and readily
				availability of program data. All data and metadata
				provided on the UNEP CounterMEASURE website are available
				free of charge and may be copied freely, duplicated and
				further distributed provided that UNEP CounterMEASURE is
				cited as the reference. 
			</Text>
			<br/>
			<TitleText>Open Data Policy Goals</TitleText>
			<Text>
				The UNEP CounterMEASURE program Open Data Policy is
				established to achieve the following goals: Provide easier
				access to publicly available data concerning plastic
				pollution in riversAugment ground-level research in an
				efficient and scalable wayinform policy decisions and
				actions to beat plastic pollution and ensure rivers are free
				of plastic wasteencourage good practice and behavioral
				change to reduce marine pollution.
			</Text>
			<br/>
			<TitleText>Disclaimers</TitleText>
			<Text>
				The data and metadata presented on UNEP CounterMEASURE site
				are supplied as collected by UNEP and its partners.  Partner
				source data is provided without any addition, subtraction,
				amendment, or modification by the UNEP CounterMEASURE
				program.
			</Text>
			<br/>
			<TitleText>Accuracy and Currency of Data</TitleText>
			<Text>
				UNEP CounterMEASURE collects data from multiple partner
				sources.  It strives for the highest level of accuracy and
				is committed to promptly correcting any errors on its part
				and alerting partners to any errors on their part. UNEP and
				its partner organizations do not guarantee or make any
				express or implied representations regarding the accuracy,
				reliability, correctness, fitness for use for a particular
				purpose, or otherwise, whatsoever, of any of the databases
				on the CounterMEASURE site.  
			</Text>
			<br/>
			<br/>
			<Text>
				UNEP periodically incorporates, without notice, new data
				sets, revisions, updates and improvements to the
				CounterMEASURE data according to the partner source
				availability but undertakes no obligation to do so,
				timeously or at all.
			</Text>
			<br/>
			<br/>
			<Text>
					Information about the quality or limitations of the data
				and metadata should be obtained from the partner
				organization responsible for the source
				database/publication.
			</Text>
			<br/>
			<TitleText>Country or Area Designations</TitleText>
			<Text>
				The designations employed and the presentation of the
				material on the UNEP CounterMEASURE program sites do not
				imply the expression of any opinion whatsoever on the part
				of the United Nations concerning the legal status of any
				country, city or area, or of its authorities, or concerning
				the delimitation of its frontier or boundaries. In some
				cases, the country nomenclature contained in some databases
				on the CounterMEASURE site may differ from the country
				nomenclature generally used by the United Nations in other
				platforms. Please refer to the individual partner source for
				information on its current country naming conventions.
			</Text>
			<br/>
			<TitleText>No liability in respect of use</TitleText>
			<Text>
				Under no circumstances shall the United Nations be liable
				for any loss, damage, liability or expense incurred or
				suffered that is claimed to have resulted from the use of
				this Site, including, without limitation, any fault, error,
				omission, interruption or delay with respect thereto. The
				use of this Site is at the User’s sole risk. Under no
				circumstances, including but not limited to negligence,
				shall the United Nations or its affiliates be liable for any
				direct, indirect, incidental, special or consequential
				damages, even if the United Nations has been advised of the
				possibility of such damages.
			</Text>
			<br/>
			<br/>
			<Text>
				Neither the United Nations nor its affiliates, nor any of
				their respective agents, employees, information providers or
				content providers, shall be liable to any User or anyone
				else for any inaccuracy, error, omission, interruption,
				deletion, defect, alteration of or use of any content
				herein, or for its timeliness or completeness, nor shall
				they be liable for any failure of performance, computer
				virus or communication line failure, regardless of cause, or
				for any damages resulting therefrom.
			</Text>
			<br/>
			<br/>
			<Text>
				This Site may contain links and references to third-party
				web sites. The linked sites are not under the control of the
				United Nations, and the United Nations is not responsible
				for the content of any linked site or any link contained in
				a linked site. The United Nations provides these links only
				as a convenience, and the inclusion of a link or reference
				does not imply the endorsement of the linked site by the
				United Nations.
			</Text>
			<br/>
			<br/>
			<Text>
				The United Nations reserves the right to deny in its sole
				discretion any user access to this Site or any portion
				thereof without notice.
			</Text>
			<br/>
			<br/>
			<Text>
				No waiver by the United Nations of any provision of these
				Terms and Conditions shall be binding except as set forth in
				writing and signed by its duly authorized representative.
			</Text>
		</Container>
		<Footer />
	</>
);

export default Terms;
