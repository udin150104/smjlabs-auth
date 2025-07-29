export function init() {
  const selectors = {
    memoryUsage: "memory",
    phpVersion: "php_version",
    laravelVersion: "laravel_version",
    serverTime: "server_time",
    uptime: "uptime",
    serverSoftware: "server_software",
    os: "os",
    dbConnection: "db_connection",
    queueConnection: "queue_connection",
    cacheDriver: "cache_driver",
    appEnv: "app_env",
    appDebug: "app_debug",
  };

  const formatBytes = (bytes) => {
    if (!bytes) return "0 Byte";
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(1024));
    return Math.round(bytes / Math.pow(1024, i)) + " " + sizes[i];
  };

  async function fetchMonitor() {
    try {
      const origin = window.location.origin;
      const response = await fetch(`${origin}/api-form/informasi`);
      const data = await response.json();

      for (const [id, key] of Object.entries(selectors)) {
        const el = document.getElementById(id);
        if (!el) continue;

        let value = data[key];
        if (key === "memory") value = formatBytes(value);
        if (key === "app_debug") value = value ? "true" : "false";
        el.textContent = value ?? "-";
      }
    } catch (err) {
      console.error("Monitor fetch error:", err);
    }
  }

  if (document.getElementById("memoryUsage")) {
    fetchMonitor();
    setInterval(fetchMonitor, 10000); // Setiap 10 detik
  }
}

export const __keep = init;
