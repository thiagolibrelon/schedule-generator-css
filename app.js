const seed = {
  projectName: "PROJETO 1 - DESCRIPTION",
  tasks: [
    ["CC24 XTR- BADGE AIRCROSS", "TOOL", "2025-05-13", "2025-06-09", "On time", 0, "TKO", "2025-05-13", "Concluded with a delay", 1],
    ["CC24 XTR- BADGE AIRCROSS", "SPV", "2025-06-27", "2025-10-16", "On time", 0, "", "", "", 2],
    ["CC24 XTR- BADGE AIRCROSS", "OT/OTOP", "2025-06-09", "2025-06-28", "On time", 0, "", "", "Concluded with a delay", 1],
    ["CC24 XTR- BADGE AIRCROSS", "SOURCING", "2024-10-18", "2025-05-07", "Concluded with a delay", 1, "ENG DOC SOURCING", "2024-10-18", "", 0],
    ["CC24 XTR- BADGE AIRCROSS", "PPAP", "2025-10-17", "2025-11-17", "On time", 0, "", "", "", 2],
    ["CC24 XTR- ADESIVO COLUNA C", "SOURCING", "2024-12-02", "2025-05-07", "Concluded with a delay", 1, "ENG DOC SOURCING", "2024-12-02", "", 0],
    ["CC24 XTR- ADESIVO COLUNA C", "OT", "2025-05-07", "2025-05-23", "On time", 0, "OTOP", "2025-05-23", "", 1],
    ["CC24 XTR- ADESIVO COLUNA C", "SPV", "2025-05-23", "2025-08-31", "On time", 0, "", "", "", 2],
    ["CC24 XTR- ADESIVO COLUNA C", "PPAP", "2025-08-31", "2025-09-20", "On time", 0, "", "", "", 2],
    ["CC24/CC21 XTR - REAR BADGE", "Negociação comercial", "2024-09-23", "2025-01-28", "Concluded with a delay", 0, "", "", "", 0],
    ["CC24/CC21 XTR - REAR BADGE", "Desenv Cor", "2025-01-30", "2025-04-14", "Concluded", 0, "", "", "", 1],
    ["CC24/CC21 XTR - REAR BADGE", "Delay entrega tinta", "2025-04-14", "2025-05-05", "Concluded with a delay", 0, "", "", "", 1],
    ["CC24/CC21 XTR - REAR BADGE", "OT", "2025-05-05", "2025-05-15", "Concluded", 0, "", "", "", 2],
    ["CC24/CC21 XTR - REAR BADGE", "TR BR/ AV Desig", "2025-05-21", "2025-06-18", "On time", 0, "", "", "", 2],
    ["CC24/CC21 XTR - REAR BADGE", "SPV", "2025-06-23", "2025-07-25", "On time", 0, "", "", "", 3],
    ["CC22 DARK EDITION - REAR BADGES", "FETE", "2024-09-25", "2025-01-02", "Concluded with a delay", 0, "", "", "", 0],
    ["CC22 DARK EDITION - REAR BADGES", "DESENV COR", "2025-01-04", "2025-03-04", "Concluded", 0, "", "", "", 1],
    ["CC22 DARK EDITION - REAR BADGES", "AJUSTE COR", "2025-03-05", "2025-04-21", "Concluded", 0, "", "", "", 1],
    ["CC22 DARK EDITION - REAR BADGES", "OT", "2025-04-22", "2025-05-02", "Concluded", 0, "", "", "", 1],
    ["CC22 DARK EDITION - REAR BADGES", "ATRASO LOG", "2025-05-02", "2025-05-24", "", 0, "", "", "", 2],
    ["CC22 DARK EDITION - REAR BADGES", "TR BR", "2025-05-25", "2025-06-06", "Attention point", 0, "", "", "", 2],
    ["CC22 DARK EDITION - REAR BADGES", "AV ASP", "2025-06-07", "2025-06-20", "Attention point", 0, "OTOP", "2025-06-20", "", 3],
  ].map(([component, description, start, end, status, progress, milestone, milestoneDate, milestoneStatus, level], index) => ({
    id: crypto.randomUUID(),
    index: index + 1,
    component,
    description,
    start,
    end,
    status,
    progress,
    milestone,
    milestoneDate,
    milestoneStatus,
    level,
  })),
  milestones: [
    { id: crypto.randomUUID(), name: "A", type: "Main Milestone", start: "2024-10-25", end: "", level: 1, color: 2 },
    { id: crypto.randomUUID(), name: "B", type: "Milestone", start: "2024-10-25", end: "", level: 0, color: 3 },
    { id: crypto.randomUUID(), name: "C", type: "Phase", start: "2024-10-25", end: "2024-11-25", level: 1, color: 1 },
  ],
  freeMilestones: [
    ["Teste 1", "Attention point", "2024-10-25", "CC24 XTR- BADGE AIRCROSS", 0],
    ["Teste 2", "Concluded", "2024-11-04", "CC24 XTR- BADGE AIRCROSS", 4],
    ["Teste 3", "Concluded Delay", "2024-11-14", "CC24 XTR- ADESIVO COLUNA C", 2],
    ["Teste 4", "Delayed", "2024-11-24", "CC24/CC21 XTR - REAR BADGE", 5],
    ["Teste 5", "Ontime", "2024-12-04", "CC22 DARK EDITION - REAR BADGES", 0],
    ["Teste 6", "Attention point", "2024-12-14", "CC24 XTR- BADGE AIRCROSS", 2],
    ["Teste 7", "Concluded", "2024-12-24", "CC24 XTR- BADGE AIRCROSS", 1],
    ["Teste 8", "Concluded Delay", "2025-01-03", "CC24 XTR- ADESIVO COLUNA C", 3],
    ["Teste 9", "Delayed", "2025-01-13", "CC24/CC21 XTR - REAR BADGE", 1],
    ["Teste 10", "Ontime", "2025-01-23", "CC22 DARK EDITION - REAR BADGES", 1],
    ["Teste 11", "Attention point", "2025-02-02", "CC24 XTR- BADGE AIRCROSS", 1],
    ["Teste 12", "Concluded", "2025-05-12", "CC24 XTR- BADGE AIRCROSS", 1],
  ].map(([name, status, date, component, level]) => ({ id: crypto.randomUUID(), name, status, date, component, level })),
};

const statusMeta = {
  "On time": { color: "#4a76b8", soft: "#dbe8f8", text: "#17365d" },
  "Attention point": { color: "#b87900", soft: "#fff1c7", text: "#5d3b00" },
  Delayed: { color: "#c74444", soft: "#f8dddd", text: "#681a1a" },
  Concluded: { color: "#4a5aa6", soft: "#e6eaff", text: "#1d285f" },
  "Concluded with a delay": { color: "#8d4f2b", soft: "#f3dfd3", text: "#4d2411" },
  "Concluded Delay": { color: "#8d4f2b", soft: "#f3dfd3", text: "#4d2411" },
  Ontime: { color: "#4a76b8", soft: "#dbe8f8", text: "#17365d" },
  "": { color: "#6f7885", soft: "#e7ebf0", text: "#303640" },
};

const storageKey = "schedule-studio-state-v1";
let state = loadState();
let zoom = "month";

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];
const dayMs = 24 * 60 * 60 * 1000;

function loadState() {
  const saved = localStorage.getItem(storageKey);
  if (!saved) return structuredClone(seed);
  try {
    return JSON.parse(saved);
  } catch {
    return structuredClone(seed);
  }
}

function saveState() {
  localStorage.setItem(storageKey, JSON.stringify(state));
}

function dateValue(value) {
  return value ? new Date(`${value}T00:00:00`) : null;
}

function iso(date) {
  return date.toISOString().slice(0, 10);
}

function formatDate(value) {
  if (!value) return "";
  return new Intl.DateTimeFormat("pt-BR", { day: "2-digit", month: "2-digit", year: "2-digit" }).format(dateValue(value));
}

function monthLabel(date) {
  return new Intl.DateTimeFormat("en", { month: "short", year: "2-digit" }).format(date);
}

function getFilteredTasks() {
  const search = $("#searchInput").value.trim().toLowerCase();
  const component = $("#componentFilter").value;
  const status = $("#statusFilter").value;
  return state.tasks.filter((task) => {
    const matchSearch = !search || `${task.component} ${task.description}`.toLowerCase().includes(search);
    const matchComponent = component === "all" || task.component === component;
    const matchStatus = status === "all" || (status === "blank" ? !task.status : task.status === status);
    return matchSearch && matchComponent && matchStatus;
  });
}

function getRange(tasks = state.tasks) {
  const dates = [
    ...tasks.flatMap((task) => [dateValue(task.start), dateValue(task.end), dateValue(task.milestoneDate)]),
    ...state.milestones.flatMap((item) => [dateValue(item.start), dateValue(item.end)]),
    ...state.freeMilestones.map((item) => dateValue(item.date)),
  ].filter(Boolean);
  const min = new Date(Math.min(...dates));
  const max = new Date(Math.max(...dates));
  min.setDate(1);
  max.setMonth(max.getMonth() + 1, 0);
  return { min, max };
}

function getMonths(min, max) {
  const months = [];
  const current = new Date(min);
  current.setDate(1);
  while (current <= max) {
    months.push(new Date(current));
    current.setMonth(current.getMonth() + 1);
  }
  return months;
}

function daysBetween(a, b) {
  return Math.max(1, Math.round((dateValue(b) - dateValue(a)) / dayMs) + 1);
}

function metric(label, value, hint) {
  return `<article class="metric"><span>${label}</span><strong>${value}</strong><em>${hint}</em></article>`;
}

function renderMetrics() {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const completed = state.tasks.filter((task) => task.status === "Concluded" || task.status === "Concluded with a delay").length;
  const late = state.tasks.filter((task) => dateValue(task.end) < today && task.status !== "Concluded").length;
  const components = new Set(state.tasks.map((task) => task.component)).size;
  const { min, max } = getRange();
  $("#metricsGrid").innerHTML = [
    metric("Activities", state.tasks.length, `${components} components`),
    metric("Completed", completed, `${Math.round((completed / state.tasks.length) * 100)}% of schedule`),
    metric("Open alerts", late, "Overdue or attention required"),
    metric("Range", `${monthLabel(min)} - ${monthLabel(max)}`, `${Math.round((max - min) / dayMs)} days`),
  ].join("");
}

function renderFilters() {
  const components = ["all", ...new Set(state.tasks.map((task) => task.component))];
  const current = $("#componentFilter").value || "all";
  $("#componentFilter").innerHTML = components
    .map((item) => `<option value="${escapeHtml(item)}">${item === "all" ? "All components" : escapeHtml(item)}</option>`)
    .join("");
  $("#componentFilter").value = components.includes(current) ? current : "all";
}

function renderLegend() {
  const statuses = ["On time", "Attention point", "Delayed", "Concluded", "Concluded with a delay"];
  $("#legend").innerHTML = $("#legendToggle").checked
    ? statuses.map((status) => `<span class="legend-item"><span class="dot" style="--dot:${statusMeta[status].color}"></span>${status}</span>`).join("")
    : "";
}

function renderTimeline() {
  const tasks = getFilteredTasks().sort((a, b) => a.component.localeCompare(b.component) || dateValue(a.start) - dateValue(b.start));
  const { min, max } = getRange(tasks.length ? tasks : state.tasks);
  const totalDays = Math.max(1, Math.round((max - min) / dayMs) + 1);
  const pxPerDay = zoom === "week" ? 9 : 4.2;
  const timelineWidth = Math.max(680, Math.round(totalDays * pxPerDay));
  const months = getMonths(min, max);
  const todayOffset = ((new Date().setHours(0, 0, 0, 0) - min) / dayMs) * pxPerDay;
  const monthColumns = months
    .map((month, index) => {
      const next = new Date(month);
      next.setMonth(next.getMonth() + 1);
      const days = Math.max(1, Math.round((Math.min(next, max) - Math.max(month, min)) / dayMs));
      return `<div class="month-cell" style="width:${days * pxPerDay}px;grid-column:${index + 1}">${monthLabel(month)}</div>`;
    })
    .join("");

  const rows = [];
  let currentComponent = "";
  for (const task of tasks) {
    if (task.component !== currentComponent) {
      currentComponent = task.component;
      rows.push(`<div class="task-label component">${escapeHtml(currentComponent)}</div><div class="lane component"></div>`);
    }
    rows.push(`<div class="task-label" style="padding-left:${14 + Number(task.level || 0) * 12}px">
      <strong>${escapeHtml(task.description || "Untitled")}</strong>
      <small>${formatDate(task.start)} - ${formatDate(task.end)}</small>
    </div>${renderTaskLane(task, min, pxPerDay, timelineWidth)}`);
  }

  const milestoneBand = `<div class="task-label">Project milestones</div><div class="milestone-band" style="width:${timelineWidth}px">${renderMilestones(min, pxPerDay)}</div>`;
  $("#timeline").innerHTML = `<div class="timeline-grid">
    <div class="timeline-corner">${tasks.length} visible activities</div>
    <div class="months" style="grid-template-columns:repeat(${months.length}, auto);width:${timelineWidth}px">${monthColumns}</div>
    ${milestoneBand}
    ${rows.join("")}
  </div>${todayOffset >= 0 && todayOffset <= timelineWidth ? `<div class="today-line" style="left:${260 + todayOffset}px"></div>` : ""}`;
  $$(".lane").forEach((lane) => {
    lane.style.width = `${timelineWidth}px`;
    lane.style.backgroundSize = `${zoom === "week" ? 63 : 126}px 100%`;
  });
}

function renderTaskLane(task, min, pxPerDay, width) {
  const meta = statusMeta[task.status || ""] || statusMeta[""];
  const left = Math.max(0, ((dateValue(task.start) - min) / dayMs) * pxPerDay);
  const barWidth = Math.max(10, daysBetween(task.start, task.end) * pxPerDay);
  const progress = Math.max(0, Math.min(1, Number(task.progress || 0)));
  const individual = task.milestoneDate
    ? `<span class="marker" title="${escapeHtml(task.milestone || "Milestone")}" style="left:${((dateValue(task.milestoneDate) - min) / dayMs) * pxPerDay}px;--marker:${statusMeta[task.milestoneStatus || task.status || ""].color}"></span>`
    : "";
  const freeMarkers = state.freeMilestones
    .filter((item) => item.component === task.component)
    .map((item) => {
      const offset = ((dateValue(item.date) - min) / dayMs) * pxPerDay;
      if (offset < 0 || offset > width) return "";
      return `<span class="marker free" title="${escapeHtml(item.name)}" style="left:${offset}px;top:${25 + Number(item.level || 0) * 3}px;--marker:${(statusMeta[item.status] || statusMeta[""]).color}"></span>`;
    })
    .join("");
  return `<div class="lane" style="width:${width}px">
    <div class="bar" style="left:${left}px;width:${barWidth}px;--bar:${meta.color};--bar-soft:${meta.soft};--bar-text:${meta.text}">
      <div class="bar-progress" style="width:${progress * 100}%"></div>
      <div class="bar-label">${escapeHtml(task.description || "")}</div>
    </div>
    ${individual}${freeMarkers}
  </div>`;
}

function renderMilestones(min, pxPerDay) {
  return state.milestones
    .map((item, index) => {
      if (!item.start) return "";
      const left = ((dateValue(item.start) - min) / dayMs) * pxPerDay;
      const colors = ["#4a5aa6", "#147c73", "#b87900", "#c74444"];
      return `<span class="marker" style="left:${left}px;top:${20 + Number(item.level || 0) * 16}px;--marker:${colors[item.color] || colors[index % colors.length]}"></span>
      <span class="milestone-label" style="left:${left}px;top:${2 + Number(item.level || 0) * 16}px">${escapeHtml(item.name)}</span>`;
    })
    .join("");
}

function tableInput(value, type, dataset) {
  return `<input type="${type}" value="${escapeAttr(value ?? "")}" ${dataset}>`;
}

function tableSelect(value, options, dataset) {
  return `<select ${dataset}>${options.map((option) => `<option ${option === value ? "selected" : ""}>${escapeHtml(option)}</option>`).join("")}</select>`;
}

function renderTasksTable() {
  const statuses = ["", "On time", "Attention point", "Delayed", "Concluded", "Concluded with a delay"];
  $("#tasksTable").innerHTML = `<thead><tr>
    <th>Component</th><th>Description</th><th>Initial</th><th>Final</th><th>Status</th><th>%</th><th>Milestone</th><th>Date</th><th>Level</th><th></th>
  </tr></thead><tbody>${state.tasks
    .map(
      (task) => `<tr data-id="${task.id}">
      <td>${tableInput(task.component, "text", 'data-field="component"')}</td>
      <td>${tableInput(task.description, "text", 'data-field="description"')}</td>
      <td>${tableInput(task.start, "date", 'data-field="start"')}</td>
      <td>${tableInput(task.end, "date", 'data-field="end"')}</td>
      <td>${tableSelect(task.status || "", statuses, 'data-field="status"')}</td>
      <td>${tableInput(task.progress ?? 0, "number", 'min="0" max="1" step="0.05" data-field="progress"')}</td>
      <td>${tableInput(task.milestone, "text", 'data-field="milestone"')}</td>
      <td>${tableInput(task.milestoneDate, "date", 'data-field="milestoneDate"')}</td>
      <td>${tableInput(task.level ?? 0, "number", 'min="0" max="10" data-field="level"')}</td>
      <td><button class="row-action" data-delete-task="${task.id}" title="Delete"><i data-lucide="trash-2"></i></button></td>
    </tr>`,
    )
    .join("")}</tbody>`;
}

function renderMilestoneTables() {
  $("#milestonesTable").innerHTML = `<thead><tr><th>Name</th><th>Type</th><th>Initial</th><th>Final</th><th>Level</th><th></th></tr></thead><tbody>${state.milestones
    .map(
      (item) => `<tr data-id="${item.id}">
      <td>${tableInput(item.name, "text", 'data-ms-field="name"')}</td>
      <td>${tableSelect(item.type, ["Main Milestone", "Milestone", "Phase"], 'data-ms-field="type"')}</td>
      <td>${tableInput(item.start, "date", 'data-ms-field="start"')}</td>
      <td>${tableInput(item.end, "date", 'data-ms-field="end"')}</td>
      <td>${tableInput(item.level ?? 0, "number", 'min="0" max="10" data-ms-field="level"')}</td>
      <td><button class="row-action" data-delete-ms="${item.id}" title="Delete"><i data-lucide="trash-2"></i></button></td>
    </tr>`,
    )
    .join("")}</tbody>`;

  const components = [...new Set(state.tasks.map((task) => task.component))];
  const statuses = ["Attention point", "Concluded", "Concluded Delay", "Delayed", "Ontime"];
  $("#freeMilestonesTable").innerHTML = `<thead><tr><th>Name</th><th>Status</th><th>Date</th><th>Component</th><th>Level</th><th></th></tr></thead><tbody>${state.freeMilestones
    .map(
      (item) => `<tr data-id="${item.id}">
      <td>${tableInput(item.name, "text", 'data-free-field="name"')}</td>
      <td>${tableSelect(item.status, statuses, 'data-free-field="status"')}</td>
      <td>${tableInput(item.date, "date", 'data-free-field="date"')}</td>
      <td>${tableSelect(item.component, components, 'data-free-field="component"')}</td>
      <td>${tableInput(item.level ?? 0, "number", 'min="0" max="10" data-free-field="level"')}</td>
      <td><button class="row-action" data-delete-free="${item.id}" title="Delete"><i data-lucide="trash-2"></i></button></td>
    </tr>`,
    )
    .join("")}</tbody>`;
}

function getAlerts() {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return state.tasks
    .filter((task) => task.status !== "Concluded")
    .map((task) => {
      const end = dateValue(task.end);
      const days = Math.ceil((end - today) / dayMs);
      let category = "";
      if (days < 0) category = "Overdue";
      else if (days <= 7) category = "Next 7 days";
      else if (days <= 15) category = "Next 15 days";
      return category ? { task, days, category } : null;
    })
    .filter(Boolean);
}

function renderAlerts() {
  const alerts = getAlerts();
  $("#alertCount").textContent = alerts.length;
  $("#alertsList").innerHTML = alerts.length
    ? alerts
        .map((alert) => {
          const color = alert.days < 0 ? "var(--red)" : alert.days <= 7 ? "var(--amber)" : "var(--teal)";
          const due = alert.days < 0 ? `${Math.abs(alert.days)} days late` : `${alert.days} days left`;
          return `<article class="alert-card" style="--alert:${color}">
          <strong>${escapeHtml(alert.category)} · ${escapeHtml(alert.task.component)}</strong>
          <span>${escapeHtml(alert.task.description)} · ${formatDate(alert.task.end)} · ${due} · ${escapeHtml(alert.task.status || "No status")}</span>
        </article>`;
        })
        .join("")
    : `<div class="empty-state">No open alerts.</div>`;
}

function renderAll() {
  $("#projectName").value = state.projectName;
  $("#pageTitle").textContent = state.projectName || "Schedule Generator";
  renderFilters();
  renderMetrics();
  renderLegend();
  renderTimeline();
  renderTasksTable();
  renderMilestoneTables();
  renderAlerts();
  lucide.createIcons();
}

function updateField(collection, id, field, value) {
  const item = state[collection].find((entry) => entry.id === id);
  if (!item) return;
  item[field] = ["progress", "level", "color"].includes(field) ? Number(value || 0) : value;
  saveState();
  renderAll();
}

function bindEvents() {
  $$(".nav-tab").forEach((button) => {
    button.addEventListener("click", () => {
      $$(".nav-tab").forEach((tab) => tab.classList.remove("active"));
      $$(".view").forEach((view) => view.classList.remove("active"));
      button.classList.add("active");
      $(`#${button.dataset.view}View`).classList.add("active");
    });
  });

  $("#projectName").addEventListener("input", (event) => {
    state.projectName = event.target.value;
    saveState();
    $("#pageTitle").textContent = state.projectName;
  });

  ["searchInput", "componentFilter", "statusFilter", "weeksToggle", "legendToggle"].forEach((id) => {
    $(`#${id}`).addEventListener("input", renderAll);
  });

  $$(".segmented").forEach((button) => {
    button.addEventListener("click", () => {
      zoom = button.dataset.zoom;
      $$(".segmented").forEach((item) => item.classList.toggle("active", item === button));
      renderTimeline();
    });
  });

  document.addEventListener("change", (event) => {
    const row = event.target.closest("tr[data-id]");
    if (!row) return;
    if (event.target.dataset.field) updateField("tasks", row.dataset.id, event.target.dataset.field, event.target.value);
    if (event.target.dataset.msField) updateField("milestones", row.dataset.id, event.target.dataset.msField, event.target.value);
    if (event.target.dataset.freeField) updateField("freeMilestones", row.dataset.id, event.target.dataset.freeField, event.target.value);
  });

  document.addEventListener("click", (event) => {
    const deleteTask = event.target.closest("[data-delete-task]");
    const deleteMs = event.target.closest("[data-delete-ms]");
    const deleteFree = event.target.closest("[data-delete-free]");
    if (deleteTask) state.tasks = state.tasks.filter((task) => task.id !== deleteTask.dataset.deleteTask);
    if (deleteMs) state.milestones = state.milestones.filter((item) => item.id !== deleteMs.dataset.deleteMs);
    if (deleteFree) state.freeMilestones = state.freeMilestones.filter((item) => item.id !== deleteFree.dataset.deleteFree);
    if (deleteTask || deleteMs || deleteFree) {
      saveState();
      renderAll();
    }
  });

  $("#addTaskButton").addEventListener("click", () => {
    state.tasks.push({
      id: crypto.randomUUID(),
      component: "New component",
      description: "New activity",
      start: iso(new Date()),
      end: iso(new Date(Date.now() + 14 * dayMs)),
      status: "On time",
      progress: 0,
      milestone: "",
      milestoneDate: "",
      milestoneStatus: "",
      level: 0,
    });
    saveState();
    renderAll();
  });

  $("#addMilestoneButton").addEventListener("click", () => {
    state.milestones.push({ id: crypto.randomUUID(), name: "New", type: "Milestone", start: iso(new Date()), end: "", level: 0, color: 1 });
    saveState();
    renderAll();
  });

  $("#addFreeMilestoneButton").addEventListener("click", () => {
    state.freeMilestones.push({
      id: crypto.randomUUID(),
      name: "New marker",
      status: "Attention point",
      date: iso(new Date()),
      component: state.tasks[0]?.component || "",
      level: 0,
    });
    saveState();
    renderAll();
  });

  $("#resetButton").addEventListener("click", () => {
    state = structuredClone(seed);
    saveState();
    renderAll();
  });

  $("#importJsonButton").addEventListener("click", () => $("#importJsonInput").click());
  $("#importJsonInput").addEventListener("change", async (event) => {
    const file = event.target.files?.[0];
    if (!file) return;
    try {
      const imported = JSON.parse(await file.text());
      if (!Array.isArray(imported.tasks) || !Array.isArray(imported.milestones) || !Array.isArray(imported.freeMilestones)) {
        throw new Error("Invalid Schedule Studio file");
      }
      state = imported;
      saveState();
      renderAll();
    } catch {
      alert("This JSON file is not a valid Schedule Studio export.");
    } finally {
      event.target.value = "";
    }
  });

  $("#exportJsonButton").addEventListener("click", () => download("schedule-studio.json", JSON.stringify(state, null, 2), "application/json"));
  $("#exportCsvButton").addEventListener("click", () => download("schedule-activities.csv", toCsv(state.tasks), "text/csv"));
  $("#alertsButton").addEventListener("click", () => $("#alertsDialog").showModal());
  $("#closeAlertsButton").addEventListener("click", () => $("#alertsDialog").close());
}

function toCsv(rows) {
  const headers = ["component", "description", "start", "end", "status", "progress", "milestone", "milestoneDate", "level"];
  return [headers.join(","), ...rows.map((row) => headers.map((key) => `"${String(row[key] ?? "").replaceAll('"', '""')}"`).join(","))].join("\n");
}

function download(filename, content, type) {
  const blob = new Blob([content], { type });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  link.click();
  URL.revokeObjectURL(url);
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function escapeAttr(value) {
  return escapeHtml(value).replaceAll('"', "&quot;");
}

bindEvents();
renderAll();
