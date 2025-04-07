<script lang="ts">
  const currentTime = new Date();
  const currentHour = currentTime.getHours();

  let greeting = ""; // block-level scope

  if (currentHour < 12) {
    greeting = "Good morning";
  } else if (currentHour < 18) {
    greeting = "Good afternon";
  } else {
    greeting = "Good evening";
  }
</script>

<h1 class="text-3xl font-bold">{greeting}</h1>
