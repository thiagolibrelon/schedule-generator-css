# Features Removidas — Schedule Studio

> Registro de funcionalidades desativadas da interface para simplificação do produto.
> O código subjacente permanece no repositório para facilitar reativação futura.

---

## 1. View "Project Management" (Gantt detalhado)

**O que era:** Aba "Project Management" (`data-view="timeline"`, `#timelineView`) — timeline Gantt com arrastar/redimensionar barras, resize handles e linhas de dependência SVG.

**Por que foi removida:** Duplicava a Timeline Compact (mais usada). Interface pesada para muitas atividades.

**Como reativar:**
1. Em `index.html`, adicionar nav-tab:
   ```html
   <button class="nav-tab" data-view="timeline" title="Project Management">
     <i data-lucide="bar-chart-2"></i>
     <span class="nav-label">Project Management</span>
   </button>
   ```
2. Restaurar a `<section class="view" id="timelineView">` com a legend, zoom-control e `#timeline` div.
3. Em `app.js > renderAll()`, adicionar:
   ```js
   if (viewId === "timelineView") refreshTimelineInteractions();
   ```
4. As funções `renderTimeline()`, `refreshTimelineInteractions()`, `initTaskDragging()`, `initTaskResize()`, `initMilestoneDragging()` e todos os handlers de drag/resize estão intactos no código.

---

## 2. View "Team" (Equipe do Projeto)

**O que era:** Aba "Team" (`data-view="team"`, `#teamView`) — cards de membros com avatar/iniciais, separação Gerente/Analista, formulário de adição.

**Por que foi removida:** Sobreposição com Settings (que já gerencia usuários vinculados ao projeto). Simplificação do nav.

**Como reativar:**
1. Em `index.html`, adicionar nav-tab antes do `<div class="nav-spacer">`:
   ```html
   <button class="nav-tab" data-view="team" title="Team">
     <i data-lucide="users"></i>
     <span class="nav-label">Team</span>
   </button>
   ```
2. Restaurar `<section class="view" id="teamView">` com `#teamCards`, `#teamMemberName`, `#teamMemberRole`, `#addTeamMemberButton`.
3. Em `app.js > renderAll()`, adicionar:
   ```js
   if (viewId === "teamView") renderTeamView();
   ```
4. Funções `renderTeamView()`, `addTeamMember()`, `removeTeamMember()` estão intactas no código.
5. Evento `addTeamMemberButton` em `bindEvents()` também está presente (retorna silenciosamente se o elemento não existir).

---

## 3. Colunas Predecessor, Dependency e Level na tabela Activities

**O que eram:**
- **Predecessor** — select com todas as tasks para definir dependência (`data-dependency-predecessor`)
- **Dependency** — tipo da dependência: FS, SS, FF, SF (`data-dependency-type`)
- **Level** — profundidade visual da barra na timeline (número 0–10)

**Por que foram removidas:** Com 200+ atividades, as colunas Predecessor e Dependency geravam O(n²) elementos `<option>` no DOM, travando a interface. Level não era editado na prática.

**Como reativar:**
1. Em `app.js > renderTasksTable()`, adicionar de volta ao template de linha:
   ```js
   <td>${dependencySelect(task)}</td>
   <td>${dependencyTypeSelect(task)}</td>
   <td>${tableInput(task.level ?? 0, "number", 'min="0" max="10" data-field="level"')}</td>
   ```
2. Atualizar `colspan` do empty-state de `9` para `12`.
3. Adicionar ao `<thead>`: `<th>Predecessor</th><th>Dependency</th><th>Level</th>`.
4. Funções `dependencySelect()`, `dependencyTypeSelect()`, `updateDependencyPredecessor()`, `updateDependencyType()`, `recalculateDependencies()`, `isTaskFieldLockedByDependency()` estão intactas.
5. Os handlers de `data-dependency-predecessor` e `data-dependency-type` em `bindEvents()` também estão presentes.
6. **Nota de performance:** considerar virtualização ou modal de edição antes de reativar com projetos grandes.

---

## 4. Sidebar Filters (painel lateral de filtros)

**O que era:** Painel `.sidebar-panel.sidebar-filters` na sidebar com: campo "Project" (texto), Search, Component filter e Status filter.

**Por que foi removido:** "Project" duplicava o seletor na topbar. Os filtros foram movidos para uma barra contextual dentro da view Activities (`#activitiesView .view-filter-bar`). Os elementos `#searchInput`, `#componentFilter`, `#statusFilter` continuam no DOM (dentro da view Activities) e continuam funcionando para `getFilteredTasks()`.

**Como reativar:** Mover os `<input>` e `<select>` de volta para o sidebar, dentro de um `<div class="sidebar-panel sidebar-filters">`, e remover o `.view-filter-bar` do `#activitiesView`.

---

## 5. Toggle "Dependencies" na sidebar

**O que era:** Toggle `#dependenciesToggle` que controlava a variável `showDependencies`, mostrando/ocultando as linhas SVG de dependência na view Project Management.

**Por que foi removido:** Dependia da view Project Management (também removida) e do sistema de dependências (colunas removidas da Activities).

**Como reativar:**
1. Restaurar em `index.html` dentro de `.sidebar-toggles`:
   ```html
   <div class="toggle-row">
     <span>Dependencies</span>
     <label class="switch">
       <input id="dependenciesToggle" type="checkbox" checked />
       <span></span>
     </label>
   </div>
   ```
2. Em `app.js > bindEvents()`, o listener já está presente com `?.` e voltará a funcionar automaticamente.

---

*Última atualização: 2026-06-25*
