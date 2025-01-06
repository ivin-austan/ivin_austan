import myresume from "../doc/Ivin Austan's Resume.pdf";


export const DownloadResume=()=> {
    const filePath = myresume; // Path to your resume file in the folder
    const link = document.createElement("a"); // Create an anchor element
    link.href = filePath;
    link.download = `Ivin Austan's resume`; // Specify the file name for download
    document.body.appendChild(link); // Append the anchor element to the body
    link.click(); // Trigger the click event on the anchor element
    document.body.removeChild(link); // Remove the anchor element from the body
}