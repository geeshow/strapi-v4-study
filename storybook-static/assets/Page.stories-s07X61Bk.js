import{w as h,e as s,u as v}from"./index-8kprzD4t.js";import{R as e}from"./index-uubelm5h.js";import{H as w}from"./Header-Baeou-Hm.js";import"./index-Bres9Iq4.js";import"./Button-BrNxzBbV.js";const g=()=>{const[a,t]=e.useState();return e.createElement("article",null,e.createElement(w,{user:a,onLogin:()=>t({name:"Jane Doe"}),onLogout:()=>t(void 0),onCreateAccount:()=>t({name:"Jane Doe"})}),e.createElement("section",{className:"storybook-page"},e.createElement("h2",null,"Pages in Storybook"),e.createElement("p",null,"We recommend building UIs with a"," ",e.createElement("a",{href:"https://componentdriven.org",target:"_blank",rel:"noopener noreferrer"},e.createElement("strong",null,"component-driven"))," ","process starting with atomic components and ending with pages."),e.createElement("p",null,"Render pages with mock data. This makes it easy to build and review page states without needing to navigate to them in your app. Here are some handy patterns for managing page data in Storybook:"),e.createElement("ul",null,e.createElement("li",null,'Use a higher-level connected component. Storybook helps you compose such data from the "args" of child component stories'),e.createElement("li",null,"Assemble data in the page component from your services. You can mock these services out using Storybook.")),e.createElement("p",null,"Get a guided tutorial on component-driven development at"," ",e.createElement("a",{href:"https://storybook.js.org/tutorials/",target:"_blank",rel:"noopener noreferrer"},"Storybook tutorials"),". Read more in the"," ",e.createElement("a",{href:"https://storybook.js.org/docs",target:"_blank",rel:"noopener noreferrer"},"docs"),"."),e.createElement("div",{className:"tip-wrapper"},e.createElement("span",{className:"tip"},"Tip")," Adjust the width of the canvas with the"," ",e.createElement("svg",{width:"10",height:"10",viewBox:"0 0 12 12",xmlns:"http://www.w3.org/2000/svg"},e.createElement("g",{fill:"none",fillRule:"evenodd"},e.createElement("path",{d:"M1.5 5.2h4.8c.3 0 .5.2.5.4v5.1c-.1.2-.3.3-.4.3H1.4a.5.5 0 01-.5-.4V5.7c0-.3.2-.5.5-.5zm0-2.1h6.9c.3 0 .5.2.5.4v7a.5.5 0 01-1 0V4H1.5a.5.5 0 010-1zm0-2.1h9c.3 0 .5.2.5.4v9.1a.5.5 0 01-1 0V2H1.5a.5.5 0 010-1zm4.3 5.2H2V10h3.8V6.2z",id:"a",fill:"#999"}))),"Viewports addon in the toolbar")))};g.__docgenInfo={description:"",methods:[],displayName:"Page"};const k={title:"Example/Page",component:g,parameters:{layout:"fullscreen"}},o={},n={play:async({canvasElement:a})=>{const t=h(a),r=t.getByRole("button",{name:/Log in/i});await s(r).toBeInTheDocument(),await v.click(r),await s(r).not.toBeInTheDocument();const d=t.getByRole("button",{name:/Log out/i});await s(d).toBeInTheDocument()}};var c,l,i;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:"{}",...(i=(l=o.parameters)==null?void 0:l.docs)==null?void 0:i.source}}};var m,u,p;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const loginButton = canvas.getByRole('button', {
      name: /Log in/i
    });
    await expect(loginButton).toBeInTheDocument();
    await userEvent.click(loginButton);
    await expect(loginButton).not.toBeInTheDocument();
    const logoutButton = canvas.getByRole('button', {
      name: /Log out/i
    });
    await expect(logoutButton).toBeInTheDocument();
  }
}`,...(p=(u=n.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};const I=["LoggedOut","LoggedIn"];export{n as LoggedIn,o as LoggedOut,I as __namedExportsOrder,k as default};
