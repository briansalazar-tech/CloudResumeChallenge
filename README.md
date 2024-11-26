<h1>Cloud Resume Challenge (Azure) & Portfolio Website</h1>
<h2>Front-End</h2>
<p>The front-end of this project contains various pages including an HTML version of my resume. On the bottom of the resume page there is a page view counter. The value displayed here is stored in an Azure Cosmos DB and is pulled via an Azure Function and JavaSript code.</p>
<p>In addition to my resume page, I have recreated my portfilio website and there are various other pages including an about page, contact page, and various other projects I have completed.</p>
<p>For the project I ended up using the Bootstrap Framework for various compoents of the front-end along with my own CSS styling to get achieve the apperience I wanted.</p>
<h2>Back-End</h2>
<h3>Hosting & Static Website</h3>
<h4>Blob Storage</h4>
<p>My spin on the Cloud Resume Challenge is hosted using a Storage Account in Microsoft Azure. Utilizing the static webbsite feature of Blob storage, the contents of this repo are pushed into Blob storage and the contents of the website are displayed.</p>
<h4>Azure CDN</h4>
<p>Using Azure's Content Deliver Network and a custom domain, the website can be accessed at https://www.briansalazar.net.</p>
<h3>Azure Function & Database</h3>
<h4>Cosmos DB</h4>
<p>In order to ensure that the resume page view count is accurate, the total number of views is saved to a Cosmos DB. I ended up utilizing the Cosmos Table API since that is the one I found easier to work with. </p>
<h4>Azure Function</h4>
<p>Utilizing an Azure Functiuon with an HTTP trigger, anytime the function is called, the table that holds the resume view count is updated by 1 and the total number of resume views is returned in the HTML response. 
  In order to accomplish this, inside of the function_app.py file, I used the Table SDK to first get the value from Cosmos DB and increment the value by 1. 
  If the function executed successfully a 200 status code is returned along with the new value of resume page views.</p>
<h3>Front-End/Back-End Integration</h3>
<h4>Displaying the Total Number of Page Views</h4>
<p>The resumeviews.js file is responsible for dispalying the total number of page views on the resume.html file. 
  When the resume.html page loads, that triggers the resumeviews.js file which then triggers the url for the Azure function to return the total number of page views. 
  When that URL is visited, the HTTP trigger executes the Azure function and performs the bevahiour as described in the previous section. 
  Using DOM, the value is then dispalyed at the bottom of the resume page.
</p>
<p>A deeper dive into my experience with this project and the steps I took to complete it can be found under the projects section of the webite I <a href="https://www.briansalazar.net/pages/personal_projects/CloudResumeChallenge.html">created</a>.</p>
