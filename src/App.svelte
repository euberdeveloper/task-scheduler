<script>
  import Table from "./components/Table.svelte";

  import content from "./content.json";
  content.from = new Date(content.from);

  const props = content;
</script>

<style>
.content {
	margin: 10px 0;
  width: 100%;
  height: 100%;
  text-align: center;
}
</style>

<div class="content">
  <Table {...props} />
</div>
