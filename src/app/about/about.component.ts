import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  template: `
    <div class="bg-light p-5 rounded">
      <div class="col-sm-8 mx-auto">
        <h1>About 1-3-5 rule</h1>
        <p>
          To be productive and efficient we make to-do lists. Every day we try
          to complete as many tasks as possible. More tasks - we are more
          productive. But in fact, according to researchers, to-do lists are
          completed by 30-40 percent. A large number of unfinished tasks leads
          to stress and reduced productivity.
        </p>
        <p>
          Try to apply a simple 1-3-5 rule to prioritize tasks. From the mass of
          things to do, you need to choose nine tasks for one day:
        </p>
        <ul>
          <li>
            one big task that requires significant effort and moves you towards
            achieving your main goals
          </li>
          <li>
            three important tasks that need to be completed, they do not require
            extraordinary efforts, but are important for achieving goals
          </li>
          <li>five easy tasks that you can complete quickly and easily.</li>
        </ul>
        <p>
          By applying this rule, you will make small steps towards your goals
          every day. The power of small steps is that they lead to the
          achievement of big goals. Also, this rule significantly reduces stress
          and worries about unfulfilled tasks. A limited small number of tasks
          will bring you a sense of confidence in your abilities. Out of nine
          tasks, only one important task is mandatory. Your day may be full of
          meetings and unforeseen situations, so you have the flexibility to
          cancel and reschedule tasks.
        </p>
        <p>
          The 1-3-5 rule can change your life. Try to apply it for a long time
          and you will feel how your confidence and well-being will change.
        </p>
      </div>
    </div>
  `,
})
export class AboutComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
