// import * as React from "react";

// const id = (function* () {
//     let i = 1;
//     while (true) {
//         yield i++;
//     }
// })();

// class Mymonolithiccomp extends React.Component {
//     state = {
//         articles: [
//             {
//                 id: id.next().value,
//                 title: "article1",
//                 summary: "summary1",
//                 display: "none",
//             },
//             {
//                 id: id.next().value,
//                 title: "article2",
//                 summary: "summary2",
//                 display: "none",
//             },
//             {
//                 id: id.next().value,
//                 title: "article3",
//                 summary: "summary3",
//                 display: "none",
//             },
//         ],
//         title: "",
//         summary: "",
//     };

//     onChangeTitle = (e) => {
//         this.setState({ title: e.target.value });
//     };

//     onChangeSummary = (e) => {
//         this.setState({ summary: e.target.value });
//     };

//     onClickAdd = () => {
//         this.setState((state) => ({
//             articles: [
//                 ...state.articles,
//                 {
//                     id: id.next().value,
//                     title: state.title,
//                     summary: state.summary,
//                     display: "none",
//                 },
//             ],
//             title: "",
//             summary: "",
//         }));
//     };
// onclickToggle=(id)=>{
//     this.setState((state)=>{
//         const articles=[...this.state.articles];
//         const index=articles.findIndex(i)=>i.id===id

//     }
// }