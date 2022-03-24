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

const Lists = styled.ul`
	margin-left: 20px;
`;

const ListInner = styled.li`
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

const Privacy = () => (
	<>
		<Header />
		<Container>
			<Title>Privacy and policy</Title>
			<Text>
				We are committed to protecting your personal information and
				your right to privacy. If you have any questions or concerns
				about our policy, or our practices with regards to your
				personal information, please contact us.
			</Text>
			<br />
			<Text>
				This Privacy Policy governs the privacy policies and
				practices of our Website, located at countermeasure.asia.
				Please read our Privacy Policy carefully as it will help you
				make informed decisions about sharing your personal
				information with us.
			</Text>
			<br />
			<Text>
				We see it as our primary task to safeguard the
				confidentiality of your personal data and to protect it from
				unauthorized access.
			</Text>
			<br />
			<SubTitle>
				What personal data we collect and why we collect it
			</SubTitle>
			<br />
			<TitleText>Automatically Collected Information</TitleText>
			<Text>
				When you use our Website, we automatically collect certain
				computer information by the interaction of your mobile phone
				or web browser with our Website. Such information is
				typically considered non-personal information. We
				automatically receive information from your web browser or
				mobile device. Specific information about the data are the
				following:
			</Text>
			<Lists>
				<ListInner>IP address</ListInner>
				<ListInner>Date and time of the query</ListInner>
				<ListInner>
					Time zone difference to Greenwich Mean Time (GMT)
				</ListInner>
				<ListInner>
					Content of the request (specific page)
				</ListInner>
				<ListInner>Access status / HTTP status code</ListInner>
				<ListInner>
					Data volume transferred in each instance
				</ListInner>
				<ListInner>
					Website from which the request originates (browser type)
				</ListInner>
				<ListInner>Browser</ListInner>
				<ListInner>
					User's operating system and user interface
				</ListInner>
				<ListInner>
					{' '}
					Browser software language and version.
				</ListInner>
			</Lists>
			<br />
			<TitleText>Cookies</TitleText>
			<Text>
				Our Website uses “Cookies” to identify the areas of our
				Website that you have visited. A Cookie is a small piece of
				data stored on your computer or mobile device by your web
				browser. We use Cookies to personalize the Content that you
				see on our Website. Most web browsers can be set to disable
				the use of Cookies. However, if you disable Cookies, you may
				not be able to access functionality on our Website correctly
				or at all. We never place Personally Identifiable
				Information in Cookies.
			</Text>
			<br />
			<TitleText>
				Information Regarding Your Data Protection Rights Under
				General Data Protection Regulation (GDPR)
			</TitleText>
			<Text>
				For the purpose of this Privacy Policy, we are a Data
				Controller of your personal information. If you are from the
				European Economic Area (EEA), our legal basis for collecting
				and using your personal information, as described in this
				Privacy Policy, depends on the information we collect and
				the specific context in which we collect it. We may process
				your personal information because:
			</Text>
			<br />
			<Lists>
				<ListInner>
					We need to perform a contract with you, such as when you
					use our services
				</ListInner>
				<ListInner>You have given us permission to do so</ListInner>
				<ListInner>
					The processing is in our legitimate interests and it's
					not overridden by your rights
				</ListInner>
				<ListInner>For payment processing purposes</ListInner>
				<ListInner>To comply with the law</ListInner>
			</Lists>
			<br />
			<Text>
				If you are a resident of the European Economic Area (EEA),
				you have certain data protection rights. In certain
				circumstances, you have the following data protection
				rights:
			</Text>
			<Lists>
				<ListInner>
					The right to access, update or to delete the personal
					information we have on you
				</ListInner>
				<ListInner>The right of rectification</ListInner>
				<ListInner>The right to object</ListInner>
				<ListInner>The right of restriction</ListInner>
				<ListInner>The right to data portability</ListInner>
				<ListInner>The right to withdraw consent</ListInner>
			</Lists>
			<br />
			<Text>
				Please note that we may ask you to verify your identity
				before responding to such requests. <br />
				<br /> You have the right to complain to a Data Protection
				Authority about our collection and use of your personal
				information. For more information, please contact your local
				data protection authority in the European Economic Area
				(EEA).
			</Text>
			<br />
			<SubTitle>Analytics</SubTitle>
			<br />
			<TitleText>Use of external tools on our website</TitleText>
			<Text>
				We have integrated various tools from different companies
				into our website, which allow us to evaluate user behavior
				or to establish links with other websites.
			</Text>
			<br />
			<TitleText>Google Analytics</TitleText>
			<Text>
				The controller has integrated the component Google Analytics
				(with anonymization function) on this website. <br />
				<br /> Google Analytics is a web analytics service. Web
				analysis is the gathering, collection and analysis of data
				about the behavior of visitors to websites. Among other
				things, a web analysis service collects data on which
				website a data subject has come to a website from (so-called
				referrers), which subpages of the website were accessed or
				how often and for which period of time a subpage was viewed.
				A web analysis is mainly used to optimize a website and for
				the cost-benefit analysis of Internet advertising. <br />
				<br />
				The operator of the Google Analytics component is Google
				Inc., 1600 Amphitheatre Pkwy, Mountain View, CA 94043-1351,
				USA. <br />
				<br /> Google Analytics uses cookies. The information
				generated by the cookie about your use of this website is
				usually transmitted to a Google server in the USA and stored
				there. Google might transfer the personal information
				collected via this technical procedure to third parties.{' '}
				<br />
				<br /> As IP anonymization is activated on our website, your
				IP address will be shortened by Google within Member States
				of the European Union or other states in agreement with the
				European Economic Area. Only in exceptional cases, the full
				IP address is sent to and shortened by a Google server in
				the USA. On behalf of the operator of the website, Google
				will use this information to evaluate your use of the
				website, compile reports on website activity and to provide
				further services related to website and internet use to us.
				The IP address transferred through your browser to Google
				Analytics will not be combined with other data held by
				Google. <br />
				<br /> In addition, this website uses the Analytics feature
				UserID to track interaction data. This User ID will be
				additionally anonymized and encrypted and will not be linked
				with other data. <br />
				<br /> You can prevent the storage of cookies by a
				corresponding setting of your browser software; however,
				please note that if you do this, you may not be able to use
				all the features of this website to the fullest extent
				possible. <br />
				<br /> In addition, you may prevent the collection of the
				data generated by the cookie and related to your use of the
				website (including your IP address) by Google as well as the
				processing of this data by Google by downloading and
				installing the browser plug-in available under the following
				link: &nbsp;
				<a href='https://tools.google.com/dlpage/gaoptout?hl=en'>
					https://tools.google.com/dlpage/gaoptout?hl=en
				</a>{' '}
				<br />
				<br /> This browser add-on informs Google Analytics via
				JavaScript that no data and information about website visits
				may be transmitted to Google Analytics. <br />
				<br /> In addition, a cookie already set by Google Analytics
				can be deleted at any time via the Internet browser or other
				software programs. <br />
				<br /> Further information and Google‘s applicable privacy
				regulations can be found at &nbsp;
				<a href='https://policies.google.com/privacy?hl=en'>
					https://policies.google.com/privacy?hl=en
				</a>{' '}
				&nbsp; and &nbsp;
				<a href=' https://marketingplatform.google.com/about/'>
					https://marketingplatform.google.com/about/
				</a>
				. &nbsp; The following link provides a further explanation
				of Google Analytics &nbsp;
				<a href=' https://marketingplatform.google.com/about/'>
					https://marketingplatform.google.com/about/
				</a>
				. <br />
				<br /> Our website also uses Google Analytics performance
				reports relating to demographics and interests and reports
				on Google Display Network impressions. You can disable
				Google Analytics for display advertising and customize the
				ads on the Google Display Network by visiting the ad
				settings at this link: &nbsp;
				<a href='https://adssettings.google.com'>
					https://adssettings.google.com
				</a>
				.
				<br />
			</Text>
			<br />
			<TitleText>Google Tag Manager</TitleText>
			<Text>
				This website uses Google Tag Manager. Through this service
				so-called website tags can be managed centrally via a user
				interface. Google Tag Manager only implements tags.No
				cookies are used and no personal information is collected.{' '}
				<br />
				<br /> For each third-party data collection, Google will
				provide a respective privacy policy: &nbsp;
				<a href='https://www.google.com/analytics/tag-manager/use-policy/'>
					https://www.google.com/analytics/tag-manager/use-policy/
				</a>{' '}
				<br />
				<br />
				However, Google Tag Manager will not access these data. If
				deactivation has been implemented for certain domains /
				websites or cookies, it will remain in effect for all
				tracking tags as far as they are implemented with the Google
				Tag Manager.
			</Text>
			<br />
			<SubTitle>Contacting Us</SubTitle>
			<Text>
				If there are any questions regarding this privacy policy you
				may contact us.
			</Text>
		</Container>
		<Footer />
	</>
);

export default Privacy;