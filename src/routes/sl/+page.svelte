<script lang="ts">
	import * as devalue from 'devalue';
	export let data;
	console.log(data);
</script>

<h1>Server Load Function</h1>
<h2>{data.title}</h2>
<pre>{devalue.uneval(data)}</pre>
