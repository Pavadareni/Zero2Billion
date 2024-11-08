const formsData = [
    {
      id: 1,
      data: {
        title: "Idea Box",
        fields: [
          { type: "text", label: "Name", name: "name", alignment: "left" },
          { type: "text", label: "College", name: "college", alignment: "Right" },
          { type: "tel", label: "Mobile Number", name: "mobile", alignment: "left" },
          { type: "text", label: "Dept and Yr", name: "department&yr", alignment: "right" },
          { type: "text", label: "Domain", name: "domain", alignment: "left" },
          { type: "email", label: "Email", name: "email", alignment: "right" },
          { type: "textarea", label: "Problem Statement", name: "problemstatement", alignment: "left" },
          { type: "textarea", label: "Why Startup", name: "whystartup", alignment: "left" },
          { type: "textarea", label: "Brief outline on your Startup Idea?", name: "briefoutlineonyourstartupidea", alignment: "left" },
          { type: "text", label: "Attach Document (Drive Link)", name: "document", alignment: "left" },
        ]
      }
    },
    {
      id: 2,
      data: {
        title: "Know Your Valuation",
        fields: [
          { type: "text", label: "Name of the Startup", name: "startupname", alignment: "left" },
          { type: "email", label: "Email", name: "email", alignment: "right" },
          { type: "text", label: "Startup Domain", name: "startupdomain", alignment: "left" },
          { type: "tel", label: "Mobile Number", name: "mobile", alignment: "left" },
          { type: "select", label: "Is your Startup DPIIT Registered?", name: "registered", options: ["Yes", "No"] },
          { type: "select", label: "Type of Valuation", name: "typeofvaluation", options: ["pre-money valuation", "post-money valuation"] },
          { type: "text", label: "Attach Document (Drive Link)", name: "doc", alignment: "left" },
        ]
      }
    },
    {
      id: 3,
      data: {
        title: "Industry Support",
        fields: [
          { type: "text", label: "Name", name: "name", alignment: "left" },
          { type: "email", label: "Email", name: "email", alignment: "right" },
          { type: "text", label: "Organization", name: "organization", alignment: "left" },
          { type: "tel", label: "Mobile Number", name: "mobile", alignment: "right" },
          { type: "textarea", label: "Describe Your Problem Statement", name: "describeyourproblemstatement", alignment: "left" },
          { type: "textarea", label: "What solution are you looking for?", name: "whatsolutionareyoulookingfor", alignment: "left" },
          { type: "textarea", label: "Any other requirements?", name: "anyotherrequirements", alignment: "left" },
          { type: "text", label: "Attach Document (Drive Link)", name: "attachdocument", alignment: "left" },
        ]
      }
    },
    {
      id: 4,
      data: {
        title: "Internships",
        fields: [
          { type: "text", label: "Name of the Applicant", name: "nameoftheapplicant", alignment: "left" },
          { type: "email", label: "Email", name: "email", alignment: "right" },
          { type: "tel", label: "Mobile Number", name: "mobile", alignment: "left" },
          { type: "select", label: "Applicant Category", name: "applicantcategory", options: ["Student", "Individual", "Faculty"], alignment: "right" },
          { type: "textarea", label: "Domain Interest", name: "domaininterest", alignment: "left" },
          { type: "textarea", label: "Acquired Skills? Mention in brief", name: "skills", alignment: "left" },
          { type: "textarea", label: "Internship Duration", name: "internshipduration", alignment: "left" },
          { type: "text", label: "Submit your profile or bio (Drive Link)", name: "submityourprofileorbio", alignment: "left" },
        ]
      }
    },
    {
      id: 5,
      data: {
        title: "Skill Enhancement",
        fields: [
          { type: "text", label: "Name", name: "name", alignment: "left" },
          { type: "tel", label: "Mobile Number", name: "mobile", alignment: "right" },
          { type: "email", label: "Email", name: "email", alignment: "left" },
          { type: "select", label: "Representing as?", name: "representing", options: ["Institution", "Individual", "Startup"], alignment: "right" },
          { type: "text", label: "Name of the Organization", name: "organizationname", alignment: "left" },
          { type: "text", label: "How long since inception?", name: "inception", alignment: "right" },
          { type: "select", label: "Do you want to be onboarded as?", name: "onboard", options: ["Explorer", "Service Provider"], alignment: "left" },
          { type: "select", label: "Duration of Hands-On Session", name: "session", options: ["1 Day", "3 Day", "1 Week", "1 Month"], alignment: "left" },
          { type: "textarea", label: "Which field are you strong in?", name: "field", alignment: "left" },
          { type: "textarea", label: "If Institute, What is the count of students interested in Hands-on Session", name: "count", alignment: "left" },
        ]
      }
    },
    {
      id: 6,
      data: {
        title: "Go-To-Market",
        fields: [
          { type: "text", label: "Name", name: "name" },
          { type: "text", label: "How many years since inception", name: "howmanyyearssinceinception" },
          { type: "select", label: "Type of Startups", name: "typesofstartups", options: ["Product Based", "Service Based"] },
          { type: "text", label: "GTM Experience in Other Countries? Mention if any", name: "gtmexperienceinothercountriesmentionifany" },
          { type: "text", label: "Upload Supporting Documents (Drive Link)", name: "document" },
          { type: "textarea", label: "What kind of support do you require from us specifically?", name: "description" },
        ]
      }
    },
    {
      id: 7,
      data: {
        title: "Bose Series",
        fields: [
          { type: "text", label: "Name", name: "name" },
          { type: "text", label: "Mobile Number", name: "mobile" },
          { type: "text", label: "Email", name: "email" },
          { type: "select", label: "What category do you belong to?", name: "category", options: ["Individual/Student", "Startup Aspirant" , "Faculty"] },
          { type: "select", label: "Are you passionate about exploring the startup ecosystem?", name: "areyoupassionateinexploringthestartupecosystem", options: ["Yes", "No"] },
          { type: "text", label: "Upload your profile or bio? (Drive Link)", name: "document" },
        ]
      }
    },
        {
          id: 8,
          data: {
            title: "COE's",
            fields: [
              { type: "text", label: "Name of the Institution / Startup / Industry", name: "nameoftheinstitution" },
              { type: "text", label: "Mobile Number", name: "mobilenumber" },
              { type: "email", label: "Email", name: "email" },
              { type: "text", label: "COE Domain", name: "coedomain" },
              { type: "textarea", label: "If you're an institution member, do you require establishing a new COE or revamping the existing one?", name: "institutiondescription" },
              { type: "textarea", label: "If you're a startup, do you have any experience in establishing a COE or plans to adapt your technology in institutions?", name: "startupdescription" },
              { type: "textarea", label: "If you're an industry member, why do you prefer establishing a COE in institutions?", name: "industrydescription" },
              { type: "text", label: "Submit Your Profile (Drive Link)", name: "document" },
              { type: "select", label: "What category do you belong to?", name: "category", options: ["Individual", "Student"] },
              { type: "select", label: "Are you passionate about exploring the startup ecosystem?", name: "exploringstartupecosystem", options: ["Yes", "No"] },
            ]
          }
        },
        {
          id: 9,
          data: {
            title: "Admission Strategy",
            fields: [
              { type: "text", label: "Name of the institution", name: "nameoftheinstitution" },
              { type: "text", label: "Institution Category", name: "institutioncategory" },
              { type: "text", label: "How long since established the institution?", name: "howlongsinceestablishedtheinstitution" },
              { type: "tel", label: "Mobile Number", name: "mobilenumber" },
              { type: "email", label: "Email", name: "email" },
              { type: "text", label: "City", name: "city" },
              { type: "text", label: "Upload Supporting Institutional Documents (Drive Link)", name: "supportingdocuments" },
              { type: "textarea", label: "What kind of support do you require from us specifically?", name: "supportdescription" },
              { type: "text", label: "Submit Your Profile (Drive Link)", name: "profiledocument" },
              { type: "select", label: "What category do you belong to?", name: "category", options: ["Individual", "Student"] },
              { type: "select", label: "Are you passionate about exploring the startup ecosystem?", name: "exploringstartupecosystem", options: ["Yes", "No"] },
            ]
          }
        },
        {
          id: 10,
          data: {
            title: "SAIN for Investor",
            fields: [
              { type: "text", label: "Name", name: "nameoftheInvestor", alignment: 'left' },
              { type: "tel", label: "Mobile Number", name: "mobilenumber", alignment: 'right' },
              { type: "email", label: "Email", name: "email", alignment: 'left' },
              { type: "text", label: "Organization", name: "org", alignment: 'right' },
              { type: "select", label: "Startup Stage", name: "startupstage", options: ["Seed Stage", "Early Stage", "Late Stage"], alignment: 'left' },
              { type: "text", label: "Your Portfolio", name: "portfolio", alignment: 'right' },
              { type: "text", label: "Interested Thrust Area?", name: "interestedthrustarea", alignment: 'left' },
              { type: "text", label: "Ticket Size", name: "ticketsize", alignment: 'right' },
              { type: "select", label: "Expected Return Type", name: "expectedreturntype", options: ["Equity", "Debt Financing"], alignment: 'center' },
            ]
          }
        },
        {
            id: 11,
            data: {
              title: "SAIN for Startups",
              fields: [
                { type: "text", label: "Name", name: "name", alignment: "left" },
                { type: "text", label: "Domain", name: "domain", alignment: "left" },
                { type: "text", label: "College", name: "college", alignment: "Right" },
                { type: "email", label: "Email", name: "email", alignment: "right" },
                { type: "tel", label: "Mobile Number", name: "mobile", alignment: "left" },
                { type: "text", label: "Dept and Yr", name: "department&yr", alignment: "right" },
                { type: "textarea", label: "Problem Statement", name: "problemstatement1", alignment: "left" },
                { type: "textarea", label: "Why Startup", name: "whystartup1", alignment: "left" },
                { type: "textarea", label: "Brief outline on your Startup Idea?", name: "briefoutlineonyourstartupidea", alignment: "left" },
                { type: "text", label: "Attach Document (Drive Link)", name: "document1", alignment: "left" },
              ]
            }
          },
          {
            id: 12,
            data: {
              title: "Individual",
              fields: [
                { type: "text", label: "Name", name: "name" },
                { type: "text", label: "Department and Year", name: "departmentandyear" },
                { type: "text", label: "College", name: "college" },
                { type: "text", label: "Email", name: "email" },
                { type: "text", label: "Mobile Number", name: "mobilenumber" },
                { type: "text", label: "Domain", name: "domain" },
                { type: "textarea", label: "Problem Statement", name: "problemstatement" },
                { type: "textarea", label: "Why Startup", name: "whystartup" },
                { type: "textarea", label: "Brief Outline of Your Startup Idea", name: "startupidea" },
                { type: "textarea", label: "Upload Necessary Documents(Drive Link)", name: "supportingdocuments" }
              ]
            }
          },
          {
            id: 13,
            data: {
              title: "Institute",
              fields: [
                { type: "text", label: "Name of the Institution", name: "nameoftheinstitution" },
                { type: "text", label: "Institution Category", name: "institutioncategory" },
                { type: "text", label: "How Long Since Established", name: "howlongsinceestablishment" },
                { type: "text", label: "Mobile Number", name: "mobilenumber" },
                { type: "text", label: "Email", name: "email" },
                { type: "text", label: "City", name: "city" },
                { type: "text", label: "Upload Supporting Documents(Drive Link)", name: "supportingdocuments" },
                { type: "textarea", label: "Specific Support Requirements", name: "supportrequirements" },
                { type: "text", label: "Submit Your Profile(Drive Link)", name: "profiledocument" },
                { type: "select", label: "What category do you belong to?", name: "category", options: ["Individual", "Student"] },
                { type: "select", label: "Are you passionate about exploring the startup ecosystem?", name: "passionateaboutstartupecosystem", options: ["Yes", "No"] },
              ]
            }
          },
        ];
export default formsData;
          
          
          
          
          
          
          
      