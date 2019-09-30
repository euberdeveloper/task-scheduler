<script>
  import generateTurns from "../utils/generate-turns";
  import generateWeeks from "../utils/generate-weeks";

  export let persons, tasks, from, howMany;

  const turns = generateTurns(persons, tasks, howMany);
  const weeks = generateWeeks(turns, from);
</script>

<style>
  * {
    font-family: Roboto, sans-serif;
  }

  table {
    border-collapse: collapse;
    display: inline-block;
    margin: 0 5px;
  }

  td,
  th {
    font-size: 16px;
    line-height: 32px;
    min-width: 150px;
    border: 1px solid #e5e5e5;
    text-align: left;
    padding: 0.75em;
  }

  .th {
    background-color: #fafafa;
    color: #616161;
    font-weight: 500;
    letter-spacing: 0.6px;
  }

  th.done {
    background-color: #e5ffdb;
  }

  td.done {
    background-color: #f3faf1;
  }

  th.current {
    background-color: #dbf2ff;
  }

  td.current {
    color: #003b7e;
  }

  @media only screen and (max-width: 830px) {
    td,
    th {
      font-size: 16px;
      line-height: 32px;
      min-width: auto;
      border: 1px solid #e5e5e5;
      padding: 0.75em;
    }
  }
</style>

<table>
  <thead>
    <td class="th" />
    {#each weeks.headers as header}
      <th scope="col" class="th">{header}</th>
    {/each}
  </thead>
  {#each weeks.weeks as week}
    <tr>
      <th
        scope="row"
        class="th {week.done ? 'done' : ''}
        {week.current ? 'current' : ''}">
        {week.week}
      </th>
      {#each week.turns as turn}
        <td class="{week.done ? 'done' : ''} {week.current ? 'current' : ''}">
          {turn}
        </td>
      {/each}
    </tr>
  {/each}
</table>
