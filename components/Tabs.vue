<script>
export default {
  name: 'Tabs',
	props: {
		initial: {
			type: String,
			required: true,
		},
		tabs: {
			type: Array,
			required: true,
		},
	},
	data() {
		return {
			active: this.initial,
		};
	},
	computed: {
		tabDetailsName() {
			return `tab-details-${this.active}`;
		},
	},
	methods: {
		selectTab(name) {
			if (name) {
				this.active = name;
			}
		},
		tabSwitcherName(name) {
			return `tab-switcher-${name}`;
		},
	},
};
</script>

<template>
	<div class="wrapper">
		<div class="content">
			<slot :name="tabDetailsName" />
		</div>

    <ul class="switcher">
				<li
					v-for="(tab, index) in tabs"
					:key="index"
					:class="['tab', {'active': active === tab}]"
					@click="selectTab(tab)"
				>
					<slot :name="tabSwitcherName(tab)">
						{{ tab }}
					</slot>
				</li>
		  </ul>
	</div>
</template>

<style lang="scss" scoped>
.wrapper {
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  padding-top: 20vh;
}
.tab {
  color:#999999;
  cursor: pointer;
  margin-right: 5rem;
}
.content {
  width: 100%;
  position: relative;
  padding: 0 5rem;
  margin-bottom: 5rem;
  h2 {
    font-size: 36px;
    font-weight: bold;
    margin-bottom: 2rem;
  }
  p {
    max-width: 300px;
  }
  & img {
    height: 240px;
    position: absolute;
    right: 0;
    top: -2rem;
  }
}
.switcher {
	padding: 0;
  list-style: none;
	display: flex;
  align-items: center;
	justify-content: space-between;
  max-width: 300px;
  margin-bottom: 3rem;
}
.item {
	display: block;
}
.active {
  font-weight: bold;
}
</style>
