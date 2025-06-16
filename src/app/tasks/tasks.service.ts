import { Injectable } from '@angular/core';
import { type NewTaskData } from './task/task.model';
@Injectable({
    providedIn:'root'
})
export class TasksService {
  private tasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary:
        'Learn all the basic and advanced features of Angular & how to apply them.',
      dueDate: '2025-12-31',
    },
    {
      id: 't2',
      userId: 'u3',
      title: 'Build first prototype',
      summary: 'Build a first prototype of the online shop website',
      dueDate: '2024-05-31',
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Prepare issue template',
      summary:
        'Prepare and describe an issue template which will help with project management',
      dueDate: '2024-06-15',
    },

    // Added Tasks
    {
      id: 't4',
      userId: 'u2',
      title: 'Write unit tests for API',
      summary: 'Ensure all backend APIs are covered with unit tests.',
      dueDate: '2024-07-10',
    },
    {
      id: 't5',
      userId: 'u4',
      title: 'Design landing page UI',
      summary: 'Create modern and responsive UI for landing page.',
      dueDate: '2024-07-01',
    },
    {
      id: 't6',
      userId: 'u5',
      title: 'Refactor authentication module',
      summary: 'Improve structure and performance of login/signup logic.',
      dueDate: '2024-08-15',
    },
    {
      id: 't7',
      userId: 'u1',
      title: 'Conduct user interviews',
      summary: 'Interview 10 users to understand product pain points.',
      dueDate: '2024-06-30',
    },
    {
      id: 't8',
      userId: 'u6',
      title: 'Migrate database to PostgreSQL',
      summary: 'Shift from MongoDB to PostgreSQL for better scalability.',
      dueDate: '2024-09-01',
    },
    {
      id: 't9',
      userId: 'u2',
      title: 'Optimize images on the website',
      summary: 'Use WebP format and lazy loading to speed up load time.',
      dueDate: '2024-07-20',
    },
    {
      id: 't10',
      userId: 'u4',
      title: 'Implement dark mode toggle',
      summary: 'Add dark mode feature using TailwindCSS and local storage.',
      dueDate: '2024-07-25',
    },
    {
      id: 't11',
      userId: 'u3',
      title: 'Fix mobile navbar bug',
      summary: 'Resolve overlapping issue on small screens.',
      dueDate: '2024-06-28',
    },
    {
      id: 't12',
      userId: 'u5',
      title: 'Create deployment scripts',
      summary: 'Automate deployment process with bash and GitHub Actions.',
      dueDate: '2024-08-01',
    },
    {
      id: 't13',
      userId: 'u1',
      title: 'Document REST API endpoints',
      summary: 'Use Swagger to generate and publish API documentation.',
      dueDate: '2024-07-15',
    },
    {
      id: 't14',
      userId: 'u6',
      title: 'Research competitor features',
      summary: 'Prepare a comparison report for product roadmap.',
      dueDate: '2024-06-22',
    },
    {
      id: 't15',
      userId: 'u4',
      title: 'Integrate Stripe payments',
      summary: 'Allow secure credit/debit card payments in the app.',
      dueDate: '2024-08-10',
    },
    {
      id: 't16',
      userId: 'u2',
      title: 'Setup CI/CD pipeline',
      summary: 'Use GitHub Actions and Docker for continuous deployment.',
      dueDate: '2024-09-05',
    },
    {
      id: 't17',
      userId: 'u5',
      title: 'Test across browsers',
      summary: 'Verify layout and functionality on Chrome, Firefox, Safari.',
      dueDate: '2024-07-18',
    },
    {
      id: 't18',
      userId: 'u3',
      title: 'Update README file',
      summary: 'Make sure project setup and usage instructions are clear.',
      dueDate: '2024-06-16',
    },
    {
      id: 't19',
      userId: 'u1',
      title: 'Build analytics dashboard',
      summary: 'Show user behavior stats with charts and filters.',
      dueDate: '2024-08-20',
    },
    {
      id: 't20',
      userId: 'u6',
      title: 'Add multi-language support',
      summary: 'Implement i18n for English, Hindi, and Spanish.',
      dueDate: '2024-10-01',
    },
    {
      id: 't21',
      userId: 'u2',
      title: 'Configure logging and alerts',
      summary: 'Set up error logging with Sentry and email alerts.',
      dueDate: '2024-08-25',
    },
    {
      id: 't22',
      userId: 'u4',
      title: 'Host product demo',
      summary: 'Prepare slides and run a live session for stakeholders.',
      dueDate: '2024-09-15',
    },
    {
      id: 't23',
      userId: 'u5',
      title: 'Add accessibility features',
      summary: 'Improve ARIA labels and keyboard navigation.',
      dueDate: '2024-07-27',
    },
  ];
  
  constructor(){
    const tasks = localStorage.getItem('tasks');

    if(tasks){
        this.tasks = JSON.parse(tasks);
    }
  }
  getUserTasks(userId: string) {
    return this.tasks.filter((task) => task.userId === userId);
  }
  addTask(taskData: NewTaskData, userId: string) {
    this.tasks.unshift({
      id: new Date().getTime().toString(),
      userId: userId,
      title: taskData.title,
      summary: taskData.summary,
      dueDate: taskData.date,
    });
      this.saveTasks();

  }

  removeTask(id:string){
     this.tasks = this.tasks.filter(task => task.id !== id);
  // alert('Task Completed and Removed! 🎉');
  this.saveTasks();
  }
  private saveTasks(){
    localStorage.setItem('tasks',JSON.stringify(this.tasks));
  }
}
