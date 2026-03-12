const screenshots = [
  {
    title: "Custom Object Configuration",
    description:
      "Job Application custom object with reporting and activity tracking enabled.",
    filename: "salesforce.PNG",
  },
  {
    title: "Fields and Relationships",
    description:
      "Core data model showing custom fields such as Application Status, Company, and Application Date.",
    filename: "salesforce2.PNG",
  },
  {
    title: "Lightning App Setup",
    description:
      "Job Tracker Lightning app configuration used to organize the project experience.",
    filename: "salesforce3.PNG",
  },
  {
    title: "Record-Triggered Flow",
    description:
      "Flow Builder automation for follow-up task creation and workflow logic.",
    filename: "salesforce4.PNG",
  },
  {
    title: "Record Example",
    description:
      "Example Job Application record used to validate data entry and workflow behavior.",
    filename: "salesforce5.PNG",
  },
  {
    title: "Record Creation Result",
    description:
      "Confirmation that the custom object stores submitted records successfully.",
    filename: "salesforce6.PNG",
  },
  {
    title: "Application Pipeline Report",
    description:
      "Pipeline visualization grouped by Application Status for reporting and analytics.",
    filename: "salesforce7.PNG",
  },
  {
    title: "Status Tracking on Record",
    description:
      "Example record showing Interview Scheduled status and Last Status Change tracking.",
    filename: "salesforce8.PNG",
  },
];

const skills = [
  "Salesforce Administration",
  "Flow Builder",
  "Record-Triggered Flows",
  "Screen Flows",
  "Custom Objects & Fields",
  "Reports & Dashboards",
  "Permission Sets",
  "Approval Processes",
  "Data Import Wizard",
  "Email Automation",
  "Task Automation",
  "CRM Pipeline Design",
  "Ticketing Workflows",
  "Cybersecurity Operations",
];

const outcomes = [
  "Created a custom Job Application object in Salesforce.",
  "Built custom fields for application tracking, interview scheduling, and recruiter notes.",
  "Configured Lightning app navigation for job tracking workflows.",
  "Built automation with Flow Builder for follow-up actions and status tracking.",
  "Created reports and a dashboard to visualize the application pipeline.",
  "Applied real operational thinking from SOC and ticketing environments.",
];

const sections = [
  {
    id: "overview",
    title: "Project Overview",
    body:
      "This portfolio project demonstrates a Salesforce-based Job Application Tracking System built in Developer Edition. The system uses a custom object, custom fields, automation flows, a Lightning app, and reporting to manage job applications like a lightweight CRM.",
  },
  {
    id: "architecture",
    title: "System Architecture",
    body:
      "The solution is built around a custom Job Application object connected to field configuration, task automation, status tracking, and reporting. This mirrors how Salesforce admins translate a business process into structured CRM components.",
  },
  {
    id: "experience",
    title: "Real-World Salesforce Experience",
    body:
      "I also used Salesforce in operations work at Sentinel Security Services while supporting a Sheraton hotel contract in a Security Operations Center environment. Salesforce was used as a ticketing platform for guest complaints, service requests, and issue handling workflows.",
  },
];

const architectureSteps = [
  "Custom Object",
  "Custom Fields",
  "Flow Automation",
  "Task / Activity Handling",
  "Reports & Dashboard",
];

function renderOutcomes() {
  const outcomesList = document.getElementById("outcomes-list");
  outcomes.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    outcomesList.appendChild(li);
  });
}

function renderSections() {
  const sectionsGrid = document.getElementById("sections-grid");
  sections.forEach((section) => {
    const article = document.createElement("article");
    article.className = "card section-card";

    article.innerHTML = `
      <p class="section-label">Section</p>
      <h3>${section.title}</h3>
      <p>${section.body}</p>
    `;

    sectionsGrid.appendChild(article);
  });
}

function renderArchitecture() {
  const container = document.getElementById("architecture-steps");

  architectureSteps.forEach((step, index) => {
    const div = document.createElement("div");
    div.className = "step-card";
    div.innerHTML = `
      <p class="step-label">Step ${index + 1}</p>
      <p class="step-title">${step}</p>
    `;
    container.appendChild(div);
  });
}

function renderScreenshots() {
  const screenshotsGrid = document.getElementById("screenshots-grid");

  screenshots.forEach((shot) => {
    const article = document.createElement("article");
    article.className = "card screenshot-card";

    article.innerHTML = `
      <div class="screenshot-placeholder">
      <img src="images/${shot.filename}" alt="${shot.title}" style="max-width:100%; height:auto; display:block;" />
      </div>
    `;

    screenshotsGrid.appendChild(article);
  });
}

function renderSkills() {
  const skillsList = document.getElementById("skills-list");

  skills.forEach((skill) => {
    const span = document.createElement("span");
    span.className = "skill-tag";
    span.textContent = skill;
    skillsList.appendChild(span);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderOutcomes();
  renderSections();
  renderArchitecture();
  renderScreenshots();
  renderSkills();
});