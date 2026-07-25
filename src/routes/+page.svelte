<script lang="ts">
	import ExperienceCard from '$lib/components/experience-card.svelte';
	import ProjectCard from '$lib/components/project-card.svelte';
	import SkillCard from '$lib/components/skill-card.svelte';
	import MacWindow from '$lib/components/mac-window.svelte';
</script>

<MacWindow
	title="Home"
	menus={[
		{ label: 'projects', href: '#projects' },
		{ label: 'blogs', href: '/blogs' },
		{ label: 'contact', href: '#contact-me' }
	]}
>
	<div>
		<h2>About Me</h2>
		<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin varius, nisi nec euismod euismod, ligula nibh ultricies mauris, sit amet rutrum mi dolor quis leo. Sed vehicula mi vitae varius iaculis. Praesent eu lorem dignissim, vehicula ex condimentum, sodales justo. Vivamus dignissim quis tellus vel euismod. Nullam cursus erat id lectus tristique placerat. Fusce facilisis lectus eget semper ultricies. Cras vitae tincidunt lacus. Curabitur ut odio tortor. Nulla id fermentum urna. Cras molestie, neque nec condimentum tincidunt, nisl orci feugiat odio, sed dictum dolor mi in libero. Nulla nec ante consectetur, dictum massa eget, aliquam magna. Donec orci metus, vulputate a ipsum ut, aliquet efficitur tortor. Aliquam erat volutpat. </p>

		<h2>Experience</h2>
		<div class="flex flex-col gap-4">
			<ExperienceCard
				company="Corp 1"
				logoUrl="https://via.placeholder.com/80"
				role="Software Engineer"
				startDate="Jan 2020"
				endDate="Dec 2023"
				description={[
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
					"Aliquam dictum est convallis tristique sagittis.",
					"Vivamus euismod lacus ut metus interdum, vitae interdum elit congue."
				]}
				techStack={["React", "TypeScript", "Node.js", "PostgreSQL"]}
			/>

			<ExperienceCard
				company="Corp 2"
				logoUrl="https://via.placeholder.com/80"
				role="Frontend Developer"
				startDate="Jan 2018"
				endDate="Dec 2019"
				description={[
					"Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
					"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
				]}
				techStack={["Vue.js", "JavaScript", "CSS", "HTML"]}
			/>

			<ExperienceCard
				company="Corp 3"
				logoUrl="https://via.placeholder.com/80"
				role="Intern"
				startDate="Jun 2017"
				endDate="Aug 2017"
				description={[
					"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
					"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
				]}
				techStack={["Python", "Django", "SQLite"]}
			/>
		</div>

		<h2 id="projects">Projects</h2>
		<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4">
			<ProjectCard
				title="Project 1"
				imageUrl="https://via.placeholder.com/640x360"
				description={[
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
					"Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
				]}
				techStack={["Svelte", "TypeScript", "Tailwind"]}
				githubUrl="https://example.com"
				demoUrl="https://example.com"
			/>

			<ProjectCard
				title="Project 2"
				imageUrl="https://via.placeholder.com/640x360"
				description={[
					"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
					"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
				]}
				techStack={["React", "Node.js", "MongoDB"]}
				githubUrl="https://example.com"
			/>

			<ProjectCard
				title="Project 3"
				imageUrl="https://via.placeholder.com/640x360"
				description={[
					"Excepteur sint occaecat cupidatat non proident.",
					"Sunt in culpa qui officia deserunt mollit anim id est laborum.",
					"Sed ut perspiciatis unde omnis iste natus error sit voluptatem."
				]}
				techStack={["Python", "Django", "PostgreSQL"]}
				demoUrl="https://example.com"
			/>

			<ProjectCard
				title="Project 4"
				description={[
					"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores."
				]}
				techStack={["Vue", "JavaScript", "CSS"]}
				githubUrl="https://example.com"
				demoUrl="https://example.com"
			/>
		</div>

		<h2>Skills</h2>
		<div class="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4">
			<SkillCard
				name="React"
				imageUrl="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
			/>
			<SkillCard
				name="TypeScript"
				imageUrl="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
			/>
			<SkillCard
				name="Svelte"
				imageUrl="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/svelte/svelte-original.svg"
			/>
			<SkillCard
				name="Python"
				imageUrl="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
			/>
			<SkillCard
				name="Node.js"
				imageUrl="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg"
			/>
			<SkillCard
				name="Tailwind CSS"
				imageUrl="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg"
			/>
			<SkillCard
				name="MongoDB"
				imageUrl="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg"
			/>
			<SkillCard
				name="PostgreSQL"
				imageUrl="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"
			/>
			<SkillCard
				name="Docker"
				imageUrl="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original-wordmark.svg"
			/>
			<SkillCard
				name="Git"
				imageUrl="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
			/>
			<SkillCard
				name="JavaScript"
				imageUrl="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
			/>
			<SkillCard
				name="Linux"
				imageUrl="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg"
			/>
		</div>

		<h2 id="contact-me">Contact Me</h2>

        <div class="modal-dialog outer-border">
        <div class="inner-border">
            <div class="modal-contents">
                <h1 class="modal-text">Contact</h1>
                <p class="mb-4"> Got a question or want to work together?</p>
                <section class="field-row" style="justify-content: flex-end;">
                    <a href="mailto:contact@bishwasaha.com" class="btn">Email</a>
                    <a href="https://github.com/kun-codes" class="btn">GitHub</a>
                    <a href="https://www.linkedin.com/in/bishwa-bhusan-saha" class="btn">LinkedIn</a>
                </section>
            </div>
        </div>
        </div>
	</div>
</MacWindow>
