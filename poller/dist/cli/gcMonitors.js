const e=require("fs"),t=process.env.CF_ACCOUNT_ID,n=process.env.KV_NAMESPACE_ID,s=process.env.CF_API_TOKEN,o="monitors_data_v1_1";async function a(e){let o={headers:{"Content-Type":"application/json",Authorization:`Bearer ${s}`}},a=await fetch(`https://api.cloudflare.com/client/v4/accounts/${t}/storage/kv/namespaces/${n}/values/${e}`,o),i=await a.json();return i}async function i(e,o){let a={method:"PUT",headers:{"Content-Type":"application/json",Authorization:`Bearer ${s}`},body:JSON.stringify(o)},i=await fetch(`https://api.cloudflare.com/client/v4/accounts/${t}/storage/kv/namespaces/${n}/values/${e}`,a);return i}t&&n&&s||(console.error("Missing required environment variables: CF_ACCOUNT_ID, KV_NAMESPACE_ID, CF_API_TOKEN"),process.exit(0)),a(o).then(async t=>{let n=function(){let t=e.readFileSync("./config.json","utf8"),n=JSON.parse(t);return JSON.parse(n)}(),s=n.monitors.map(e=>e.id);Object.keys(t.monitors).map(e=>{s.includes(e)||delete t.monitors[e];let o=new Date;o.setDate(o.getDate()-n.settings.daysInHistogram),o.toISOString().split("T")[0];let a=o.toISOString().split("T")[0];Object.keys(t.monitors[e].checks).map(n=>{n<a&&delete t.monitors[e].checks[n]})}),s.length===Object.keys(t.monitors).length&&await i(o,t)}).catch(e=>console.log(e));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jbGkvZ2NNb25pdG9ycy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBmcyA9IHJlcXVpcmUoJ2ZzJylcblxuY29uc3QgYWNjb3VudElkID0gcHJvY2Vzcy5lbnYuQ0ZfQUNDT1VOVF9JRFxuY29uc3QgbmFtZXNwYWNlSWQgPSBwcm9jZXNzLmVudi5LVl9OQU1FU1BBQ0VfSURcbmNvbnN0IGFwaVRva2VuID0gcHJvY2Vzcy5lbnYuQ0ZfQVBJX1RPS0VOXG5cbmNvbnN0IGt2TW9uaXRvcnNLZXkgPSAnbW9uaXRvcnNfZGF0YV92MV8xJ1xuXG5pZiAoIWFjY291bnRJZCB8fCAhbmFtZXNwYWNlSWQgfHwgIWFwaVRva2VuKSB7XG4gIGNvbnNvbGUuZXJyb3IoXG4gICAgJ01pc3NpbmcgcmVxdWlyZWQgZW52aXJvbm1lbnQgdmFyaWFibGVzOiBDRl9BQ0NPVU5UX0lELCBLVl9OQU1FU1BBQ0VfSUQsIENGX0FQSV9UT0tFTicsXG4gIClcbiAgcHJvY2Vzcy5leGl0KDApXG59XG5cbmFzeW5jIGZ1bmN0aW9uIGdldEt2TW9uaXRvcnMoa3ZNb25pdG9yc0tleSkge1xuICBjb25zdCBpbml0ID0ge1xuICAgIGhlYWRlcnM6IHtcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7YXBpVG9rZW59YCxcbiAgICB9LFxuICB9XG5cbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXG4gICAgYGh0dHBzOi8vYXBpLmNsb3VkZmxhcmUuY29tL2NsaWVudC92NC9hY2NvdW50cy8ke2FjY291bnRJZH0vc3RvcmFnZS9rdi9uYW1lc3BhY2VzLyR7bmFtZXNwYWNlSWR9L3ZhbHVlcy8ke2t2TW9uaXRvcnNLZXl9YCxcbiAgICBpbml0LFxuICApXG4gIGNvbnN0IGpzb24gPSBhd2FpdCByZXMuanNvbigpXG4gIHJldHVybiBqc29uXG59XG5cbmFzeW5jIGZ1bmN0aW9uIHNhdmVLVk1vbml0b3JzKGt2TW9uaXRvcnNLZXksIGRhdGEpIHtcbiAgY29uc3QgaW5pdCA9IHtcbiAgICBtZXRob2Q6ICdQVVQnLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7YXBpVG9rZW59YCxcbiAgICB9LFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGEpLFxuICB9XG5cbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXG4gICAgYGh0dHBzOi8vYXBpLmNsb3VkZmxhcmUuY29tL2NsaWVudC92NC9hY2NvdW50cy8ke2FjY291bnRJZH0vc3RvcmFnZS9rdi9uYW1lc3BhY2VzLyR7bmFtZXNwYWNlSWR9L3ZhbHVlcy8ke2t2TW9uaXRvcnNLZXl9YCxcbiAgICBpbml0LFxuICApXG5cbiAgcmV0dXJuIHJlc1xufVxuXG5mdW5jdGlvbiBsb2FkQ29uZmlnKCkge1xuICBjb25zdCBjb25maWdGaWxlID0gZnMucmVhZEZpbGVTeW5jKCcuL2NvbmZpZy5qc29uJywgJ3V0ZjgnKVxuICBjb25zdCBjb25maWcgPSBKU09OLnBhcnNlKGNvbmZpZ0ZpbGUpO1xuICByZXR1cm4gSlNPTi5wYXJzZShjb25maWcpXG59XG5cbmdldEt2TW9uaXRvcnMoa3ZNb25pdG9yc0tleSlcbiAgLnRoZW4oYXN5bmMgKGt2TW9uaXRvcnMpID0+IHtcbiAgICBsZXQgc3RhdGVNb25pdG9ycyA9IGt2TW9uaXRvcnNcblxuICAgIGNvbnN0IGNvbmZpZyA9IGxvYWRDb25maWcoKVxuICAgIGNvbnN0IGNvbmZpZ01vbml0b3JzID0gY29uZmlnLm1vbml0b3JzLm1hcCgoa2V5KSA9PiB7XG4gICAgICByZXR1cm4ga2V5LmlkXG4gICAgfSlcblxuICAgIE9iamVjdC5rZXlzKHN0YXRlTW9uaXRvcnMubW9uaXRvcnMpLm1hcCgobW9uaXRvcikgPT4ge1xuICAgICAgLy8gcmVtb3ZlIG1vbml0b3IgZGF0YSBmcm9tIHN0YXRlIGlmIG1pc3NpbmcgaW4gY29uZmlnXG4gICAgICBpZiAoIWNvbmZpZ01vbml0b3JzLmluY2x1ZGVzKG1vbml0b3IpKSB7XG4gICAgICAgIGRlbGV0ZSBzdGF0ZU1vbml0b3JzLm1vbml0b3JzW21vbml0b3JdXG4gICAgICB9XG5cbiAgICAgIC8vIGRlbGV0ZSBkYXRlcyBvbGRlciB0aGFuIGNvbmZpZy5zZXR0aW5ncy5kYXlzSW5IaXN0b2dyYW1cbiAgICAgIGxldCBkYXRlID0gbmV3IERhdGUoKVxuICAgICAgZGF0ZS5zZXREYXRlKGRhdGUuZ2V0RGF0ZSgpIC0gY29uZmlnLnNldHRpbmdzLmRheXNJbkhpc3RvZ3JhbSlcbiAgICAgIGRhdGUudG9JU09TdHJpbmcoKS5zcGxpdCgnVCcpWzBdXG4gICAgICBjb25zdCBjbGVhblVwRGF0ZSA9IGRhdGUudG9JU09TdHJpbmcoKS5zcGxpdCgnVCcpWzBdXG5cbiAgICAgIE9iamVjdC5rZXlzKHN0YXRlTW9uaXRvcnMubW9uaXRvcnNbbW9uaXRvcl0uY2hlY2tzKS5tYXAoKGNoZWNrRGF5KSA9PiB7XG4gICAgICAgIGlmIChjaGVja0RheSA8IGNsZWFuVXBEYXRlKSB7XG4gICAgICAgICAgZGVsZXRlIHN0YXRlTW9uaXRvcnMubW9uaXRvcnNbbW9uaXRvcl0uY2hlY2tzW2NoZWNrRGF5XVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0pXG5cbiAgICAvLyBzYW5pdHkgY2hlY2sgKyBpZiBnb29kIHNhdmUgdGhlIEtWXG4gICAgaWYgKGNvbmZpZ01vbml0b3JzLmxlbmd0aCA9PT0gT2JqZWN0LmtleXMoc3RhdGVNb25pdG9ycy5tb25pdG9ycykubGVuZ3RoKSB7XG4gICAgICBhd2FpdCBzYXZlS1ZNb25pdG9ycyhrdk1vbml0b3JzS2V5LCBzdGF0ZU1vbml0b3JzKVxuICAgIH1cbiAgfSlcbiAgLmNhdGNoKChlKSA9PiBjb25zb2xlLmxvZyhlKSlcbiJdLCJuYW1lcyI6WyJmcyIsInJlcXVpcmUiLCJhY2NvdW50SWQiLCJwcm9jZXNzIiwiZW52IiwiQ0ZfQUNDT1VOVF9JRCIsIm5hbWVzcGFjZUlkIiwiS1ZfTkFNRVNQQUNFX0lEIiwiYXBpVG9rZW4iLCJDRl9BUElfVE9LRU4iLCJrdk1vbml0b3JzS2V5IiwiZ2V0S3ZNb25pdG9ycyIsImluaXQiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsInJlcyIsImZldGNoIiwianNvbiIsInNhdmVLVk1vbml0b3JzIiwiZGF0YSIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiY29uc29sZSIsImVycm9yIiwiZXhpdCIsInRoZW4iLCJrdk1vbml0b3JzIiwiY29uZmlnIiwibG9hZENvbmZpZyIsImNvbmZpZ0ZpbGUiLCJyZWFkRmlsZVN5bmMiLCJwYXJzZSIsImNvbmZpZ01vbml0b3JzIiwibW9uaXRvcnMiLCJtYXAiLCJrZXkiLCJpZCIsIk9iamVjdCIsImtleXMiLCJzdGF0ZU1vbml0b3JzIiwibW9uaXRvciIsImluY2x1ZGVzIiwiZGF0ZSIsIkRhdGUiLCJzZXREYXRlIiwiZ2V0RGF0ZSIsInNldHRpbmdzIiwiZGF5c0luSGlzdG9ncmFtIiwidG9JU09TdHJpbmciLCJzcGxpdCIsImNsZWFuVXBEYXRlIiwiY2hlY2tzIiwiY2hlY2tEYXkiLCJsZW5ndGgiLCJjYXRjaCIsImUiLCJsb2ciXSwibWFwcGluZ3MiOiJBQUFBLE1BQU1BLEVBQUtDLFFBQVEsTUFFYkMsRUFBWUMsUUFBUUMsR0FBRyxDQUFDQyxhQUFhLENBQ3JDQyxFQUFjSCxRQUFRQyxHQUFHLENBQUNHLGVBQWUsQ0FDekNDLEVBQVdMLFFBQVFDLEdBQUcsQ0FBQ0ssWUFBWSxDQUVuQ0MsRUFBZ0IscUJBU3RCLGVBQWVDLEVBQWNELENBQWEsRUFDeEMsSUFBTUUsRUFBTyxDQUNYQyxRQUFTLENBQ1AsZUFBZ0IsbUJBQ2hCQyxjQUFlLENBQUMsT0FBTyxFQUFFTixFQUFTLENBQUMsQUFDckMsQ0FDRixFQUVNTyxFQUFNLE1BQU1DLE1BQ2hCLENBQUMsOENBQThDLEVBQUVkLEVBQVUsdUJBQXVCLEVBQUVJLEVBQVksUUFBUSxFQUFFSSxFQUFjLENBQUMsQ0FDekhFLEdBRUlLLEVBQU8sTUFBTUYsRUFBSUUsSUFBSSxHQUMzQixPQUFPQSxDQUNULENBRUEsZUFBZUMsRUFBZVIsQ0FBYSxDQUFFUyxDQUFJLEVBQy9DLElBQU1QLEVBQU8sQ0FDWFEsT0FBUSxNQUNSUCxRQUFTLENBQ1AsZUFBZ0IsbUJBQ2hCQyxjQUFlLENBQUMsT0FBTyxFQUFFTixFQUFTLENBQUMsQUFDckMsRUFDQWEsS0FBTUMsS0FBS0MsU0FBUyxDQUFDSixFQUN2QixFQUVNSixFQUFNLE1BQU1DLE1BQ2hCLENBQUMsOENBQThDLEVBQUVkLEVBQVUsdUJBQXVCLEVBQUVJLEVBQVksUUFBUSxFQUFFSSxFQUFjLENBQUMsQ0FDekhFLEdBR0YsT0FBT0csQ0FDVCxDQXZDS2IsR0FBY0ksR0FBZ0JFLElBQ2pDZ0IsUUFBUUMsS0FBSyxDQUNYLHdGQUVGdEIsUUFBUXVCLElBQUksQ0FBQyxJQTJDZmYsRUFBY0QsR0FDWGlCLElBQUksQ0FBQyxNQUFPQyxJQUdYLElBQU1DLEVBQVNDLEFBVm5CLFdBQ0UsSUFBTUMsRUFBYS9CLEVBQUdnQyxZQUFZLENBQUMsZ0JBQWlCLFFBQzlDSCxFQUFTUCxLQUFLVyxLQUFLLENBQUNGLEdBQzFCLE9BQU9ULEtBQUtXLEtBQUssQ0FBQ0osRUFDcEIsSUFPVUssRUFBaUJMLEVBQU9NLFFBQVEsQ0FBQ0MsR0FBRyxDQUFDLEFBQUNDLEdBQ25DQSxFQUFJQyxFQUFFLEVBR2ZDLE9BQU9DLElBQUksQ0FBQ0MsQUFQUWIsRUFPTU8sUUFBUSxFQUFFQyxHQUFHLENBQUMsQUFBQ00sSUFFbENSLEVBQWVTLFFBQVEsQ0FBQ0QsSUFDM0IsT0FBT0QsQUFWU2IsRUFVS08sUUFBUSxDQUFDTyxFQUFRLENBSXhDLElBQUlFLEVBQU8sSUFBSUMsS0FDZkQsRUFBS0UsT0FBTyxDQUFDRixFQUFLRyxPQUFPLEdBQUtsQixFQUFPbUIsUUFBUSxDQUFDQyxlQUFlLEVBQzdETCxFQUFLTSxXQUFXLEdBQUdDLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUNoQyxJQUFNQyxFQUFjUixFQUFLTSxXQUFXLEdBQUdDLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUVwRFosT0FBT0MsSUFBSSxDQUFDQyxBQW5CTWIsRUFtQlFPLFFBQVEsQ0FBQ08sRUFBUSxDQUFDVyxNQUFNLEVBQUVqQixHQUFHLENBQUMsQUFBQ2tCLElBQ25EQSxFQUFXRixHQUNiLE9BQU9YLEFBckJPYixFQXFCT08sUUFBUSxDQUFDTyxFQUFRLENBQUNXLE1BQU0sQ0FBQ0MsRUFBUyxBQUUzRCxFQUNGLEdBR0lwQixFQUFlcUIsTUFBTSxHQUFLaEIsT0FBT0MsSUFBSSxDQUFDQyxBQTNCdEJiLEVBMkJvQ08sUUFBUSxFQUFFb0IsTUFBTSxFQUN0RSxNQUFNckMsRUFBZVIsRUE1QkhrQixFQThCdEIsR0FDQzRCLEtBQUssQ0FBQyxBQUFDQyxHQUFNakMsUUFBUWtDLEdBQUcsQ0FBQ0QifQ==