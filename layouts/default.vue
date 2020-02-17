<template>
    <div class="wrapper">
        <nuxt />
        <div class="menu">
            <ul class="menu__list">
                <li class="menu__item">
                    <nuxt-link :to="{name: 'index'}">
                        <h5 :class="['menu__title', {'menu__title--active': $route.name === 'index'}]">About</h5>
					</nuxt-link>
                </li>
                <li class="menu__item">
                    <nuxt-link :to="{name: 'p2b'}">
                        <h5 :class="['menu__title', {'menu__title--active': $route.name === 'p2b'}]">Ozon Invest</h5>
                        <p class="menu__subtitle">p2b platform</p>
                    </nuxt-link>
                </li>
                <li class="menu__item">
                    <nuxt-link :to="{name: 'p2b'}">
                        <h5 :class="['menu__title', {'menu__title--active': $route.name === 'credit'}]">Ozon Credit service</h5>
                        <p class="menu__subtitle">description</p>
					</nuxt-link>
                </li>
                <li class="menu__item">
                    <nuxt-link :to="{name: 'p2b'}">
                        <h5 :class="['menu__title', {'menu__title--active': $route.name === 'finance'}]">Ozon Financial service</h5>
                        <p class="menu__subtitle">description</p>
					</nuxt-link>
                </li>
                <li class="menu__item">
                    <nuxt-link :to="{name: 'p2b'}">
                        <h5 :class="['menu__title', {'menu__title--active': $route.name === 'editorial'}]">Editorial</h5>
					</nuxt-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.menu {
	min-width: 300px;
	background-color: $c-bg;
    position: fixed;
    padding: 0;
    right: 0;
    bottom: 0;
	top: 0;

	@include xxl {
		min-width: 500px;
	}

    &__list {
        list-style-type: none;
        margin: 0;
        padding: 0;
        display: flex;
		flex-direction: column;
		height: 100%;
		justify-content: space-around;
		border-left: 2px solid $c-primary;
    }

    &__item {
		height: 100%;
		justify-content: center;
		flex-direction: column;
		border-bottom: 2px solid $c-primary;
		padding: 56px;

		&:last-child {
			border-bottom: none;
		}

		& a {
			text-decoration: none;
			color: $c-primary;
		}
    }

    &__title {
		font-size: $size-l;
		font-weight: $semibold;

		&:hover {
			color: $c-accent;
		}

        &--active {
			color: $c-accent;

			&:hover {
				color: $c-primary;
			}
        }
    }

    &__subtitle {
		font-family: 'Inconsolata', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
		font-size: $size-s;
		color: $c-secondary;
		margin-top: 12px;
    }
}
</style>

