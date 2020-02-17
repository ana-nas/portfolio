<script>
export default {
	data() {
		return {
			footerLinks: [
				{
					title: 'Behance',
					link: 'https://www.behance.net/anakonovalova',
				},
				{
					title: 'Linkedin',
					link: 'https://www.linkedin.com/in/anastasia-konovalova-27b001118/',
				},
				{
					title: 'Facebook',
					link: 'https://www.facebook.com/betaniyaho',
				},
				{
					title: 'Instagram',
					link: 'https://www.instagram.com/cosmic_ananas',
				},
			]
		}
	},
};
</script>
<template>
   <div class="row wrapper">
		<div class="col-12 col-lg-8 col-xl-8 spread">
			<div class="row">
				<div class="col">
					<h2 class="title spacing">
						I&rsquo;m a&nbsp;digital product designer<span class="d-inline d-lg-none d-xl-inline"> with an&nbsp;interest in&nbsp;user research and development</span>.
					</h2>
					<p class="description">
						Currently I&nbsp;work&nbsp;at&nbsp;<a target="_blank" class="link" href="#">Ozon</a> (Moscow, Russia).
						Mostly developing financial services inside the&nbsp;e-commerce corporation.
						I&nbsp;try to&nbsp;create senses in&nbsp;my&nbsp;life, so&nbsp;you can read&nbsp;my&nbsp;<a target="_blank" class="link" href="#">principles of work</a>.
						I&nbsp;like to&nbsp;try new things and meet new people, so&nbsp;drop me&nbsp;an&nbsp;email or&nbsp;say hi&nbsp;on&nbsp;Telegram.
					</p>
				</div>
			</div>
			<div class="row">
				<div class="col">
					<ul class="footer">
						<li v-for="(item, i) in footerLinks" :key="i">
							<a
								class="footer__link"
								:href="item.link"
								target="_blank"
							>{{ item.title }}</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>

.spread {
	display: flex;
	flex-direction: column;
	justify-content: space-between;

	padding-top: 200px;
	padding-bottom: 2rem;

	@include sm {
		padding-top: 120px;
	}
}

.title {
	line-height: 1.125;
	color: $c-primary;
	font-size: $size-xl;
	font-weight: $bold;

	@include sm {
		font-size: $size-l;
	}
}

.description {
	line-height: 1.4;
	font-size: $size-m;
	margin-bottom: 2rem;

	@include sm {
		font-size: $size-s;
		margin-bottom: 4rem;
	}
}

.link {
	color: $c-text;
    text-decoration: none;
	border-bottom: 2px solid $c-primary;

	&:hover {
		border: none;
	}
}

.spacing {
	margin-bottom: 2rem;
}

.footer {
	margin: 0;
	padding: 0;
	list-style: none;

	@include sm {
		display: flex;
    	justify-content: space-between;
	}

    & li {
        list-style-type: none;
        display: inline-block;
		margin-right: 2.5rem;

		@include md {
			margin-right: 1rem;
		}

		@include sm {
			margin-right: .5rem;
		}

		&::last-child() {
			margin-right: 0;
		}
    }

    &__link {
		color: $c-secondary;
		text-decoration: none;
		font-family: "Inconsolata", 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

		@include sm {
			font-size: 14px;
		}
    }
}

.menu {
	position: fixed;
	padding: 1rem;
	right: 0;
	bottom: 0;
	top: 0;

	&__list {
		list-style-type: none;
		margin: 0;
		padding: 0;
		display: flex;
		flex-direction: column;
	}

    &__item {
    }

    &__title {
        &--active {
			color: $c-primary;
        }
    }

    &__subtitle {
    }
}
</style>
