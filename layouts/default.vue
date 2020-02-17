<script>
/* eslint-disable max-len */
import { mapActions, mapState } from "vuex";

export default {
    computed: {
        ...mapState({
            isMenuOpen: state => state.ui.isMenuOpen
        })
    },

    methods: {
        ...mapActions({
            toggleMenu: "ui/toggleMenu",
            hideMenu: "ui/hideMenu"
        })
    }
};
</script>
<template>
    <div class="wrapper">
        <div class="body">
            <div class="row d-flex">
                <div class="col">
                    <h1 class="name">Ana Konovalova</h1>
                </div>
                <div class="col">
                    <p
                        @click="toggleMenu"
                        class="toggle"
                    >Menu</p>
                </div>
            </div>
            <nuxt />
        </div>

        <div :class="['menu', {'menu--open': isMenuOpen}]">
            <ul class="menu__list">
                <li class="menu__item">
                    <div class="menu__toggle d-flex justify-content-between">
                        <h1 class="name">Ana Konovalova</h1>
                        <p
							@click="hideMenu"
							class="toggle"
						>Menu</p>
                    </div>
                </li>
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
                    <nuxt-link :to="{name: 'credit'}">
                        <h5 :class="['menu__title', {'menu__title--active': $route.name === 'credit'}]">Ozon Credit service</h5>
                        <p class="menu__subtitle">description</p>
                    </nuxt-link>
                </li>
                <li class="menu__item">
                    <nuxt-link :to="{name: 'financial'}">
                        <h5 :class="['menu__title', {'menu__title--active': $route.name === 'finance'}]">Ozon Financial service</h5>
                        <p class="menu__subtitle">description</p>
                    </nuxt-link>
                </li>
                <li class="menu__item">
                    <nuxt-link :to="{name: 'editorial'}">
                        <h5 :class="['menu__title', {'menu__title--active': $route.name === 'editorial'}]">Editorial</h5>
                    </nuxt-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<style lang="scss">
.name,
.toggle {
    color: $c-accent;
    font-size: $size-l;
    font-weight: $semibold;
}

.toggle {
    text-align: right;
    cursor: pointer;
}

.body {
    width: 100%;
    height: 100%;
    padding: 56px 80px;
    color: $c-text;
    font-weight: $regular;

    @include md {
        padding: 56px;
    }
}

.menu {
    width: 300px;
    background-color: $c-bg;
    position: fixed;
    padding: 0;
    right: 0;
    bottom: 0;
    top: 0;

    transition: transform 0.25s ease-in-out, -webkit-transform 0.25s ease-in-out;

    @include xxl {
        width: 500px;
    }

    @include md {
        transform: translateX(100%);
        width: 100%;

        &--open {
            transform: translateX(0);
        }
	}

	&__toggle {
		width: 100%;
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

        @include md {
            border-left: none;
        }
    }

    &__item {
		height: 100%;
		display: flex;
		justify-content: center;
        flex-direction: column;
        border-bottom: 2px solid $c-primary;
		padding: 56px;

		@include md {
			padding: 0 56px;
			text-align: center;
			align-items: center;
		}

		&:first-child {
			display: none;

			@include md {
				display: flex;
			}
		}

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
        font-family: "Inconsolata", "Segoe UI", Tahoma, Geneva, Verdana,
            sans-serif;
        font-size: $size-s;
        color: $c-secondary;
        margin-top: 12px;
    }
}
</style>

