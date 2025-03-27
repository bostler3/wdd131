let aCourse = {
    code: "WDD131",
    title: "Dynamic Web Fundamentals",
    credits: 2,
    sections: [{
        section: 1,
        enrolled: 100,
        instructor: "Mr. Test"
    },
    {
        section: 2,
        enrolled: 150,
        instructor: "Mrs. Test"
    }]
};

function setCourseInformation(course) {
    document.querySelector("#courseName").innerHTML = `${course.code} - ${course.title}`;
}

function sectionTemplate(section) {
    return `<tr>
        <td>${section.section}</td>
        <td>${section.enrolled}</td>
        <td>${section.instructor}</td>
    </tr>`
}

function renderSections(sections) {
    const html = sections.map(sectionTemplate);
    document.querySelector("#sections tbody").innerHTML = html.join("");
}

setCourseInformation(aCourse);
renderSections(aCourse.sections);