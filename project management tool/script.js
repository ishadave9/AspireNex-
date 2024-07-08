$(document).ready(function () {
    // List of projects
    const projects = [];
    const tasks = [];

    // Handle project form submission
    $('#project-form').on('submit', function (e) {
        e.preventDefault();
        const projectName = $('#projectName').val();
        if (projectName) {
            const project = { name: projectName, id: Date.now() };
            projects.push(project);
            $('#projectList').append(`<li class="list-group-item" data-id="${project.id}">${projectName}</li>`);
            $('#taskProject').append(`<option value="${project.id}">${projectName}</option>`);
            $('#projectName').val('');
        }
    });

    // Handle task form submission
    $('#task-form').on('submit', function (e) {
        e.preventDefault();
        const taskName = $('#taskName').val();
        const taskAssignee = $('#taskAssignee').val();
        const taskDeadline = $('#taskDeadline').val();
        const taskPriority = $('#taskPriority').val();
        const taskProjectId = $('#taskProject').val();
        const taskProjectName = $('#taskProject option:selected').text();
        const taskDate = $('#taskDate').val();

        if (taskName && taskAssignee && taskDeadline && taskPriority && taskProjectId && taskDate) {
            const task = {
                id: Date.now(),
                name: taskName,
                assignee: taskAssignee,
                deadline: taskDeadline,
                priority: taskPriority,
                projectId: taskProjectId,
                projectName: taskProjectName,
                dateAssigned: taskDate,
            };
            tasks.push(task);
            $('#taskList').append(
                `<li class="list-group-item" data-id="${task.id}">
                    <div>
                        <strong>${task.name}</strong> (Project: ${task.projectName})
                        <br> Assignee: ${task.assignee}
                        <br> Deadline: ${task.deadline}
                        <br> Priority: ${task.priority}
                        <br> Date Assigned: ${task.dateAssigned}
                    </div>
                </li>`
            );
            $('#taskName').val('');
            $('#taskAssignee').val('');
            $('#taskDeadline').val('');
            $('#taskPriority').val('Medium');
            $('#taskProject').val('');
            $('#taskDate').val('');
        }
    });
});



