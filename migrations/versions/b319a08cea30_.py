"""empty message

Revision ID: b319a08cea30
Revises: dff1b0ab33d3
Create Date: 2021-04-30 01:39:37.286017

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'b319a08cea30'
down_revision = 'dff1b0ab33d3'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('countries',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('nombre', sa.String(length=120), nullable=False),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('facilidades',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('nombre', sa.String(length=120), nullable=False),
    sa.Column('url', sa.String(length=120), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('galerias',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('nombre', sa.String(length=120), nullable=False),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('facilidades_sitios',
    sa.Column('sitio_id', sa.Integer(), nullable=True),
    sa.Column('facilidad_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['facilidad_id'], ['facilidades.id'], ),
    sa.ForeignKeyConstraint(['sitio_id'], ['sitios.id'], )
    )
    op.create_table('galerias_sitios',
    sa.Column('sitio_id', sa.Integer(), nullable=True),
    sa.Column('galeria_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['galeria_id'], ['galerias.id'], ),
    sa.ForeignKeyConstraint(['sitio_id'], ['sitios.id'], )
    )
    op.add_column('sitios', sa.Column('portada', sa.String(length=120), nullable=True))
    op.add_column('sitios', sa.Column('tipo_costo', sa.Boolean(), nullable=True))
    op.add_column('sitios', sa.Column('ubicacion', sa.String(length=120), nullable=True))
    op.add_column('usuarios', sa.Column('country_id', sa.Integer(), nullable=True))
    op.create_foreign_key(None, 'usuarios', 'countries', ['country_id'], ['id'])
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_constraint(None, 'usuarios', type_='foreignkey')
    op.drop_column('usuarios', 'country_id')
    op.drop_column('sitios', 'ubicacion')
    op.drop_column('sitios', 'tipo_costo')
    op.drop_column('sitios', 'portada')
    op.drop_table('galerias_sitios')
    op.drop_table('facilidades_sitios')
    op.drop_table('galerias')
    op.drop_table('facilidades')
    op.drop_table('countries')
    # ### end Alembic commands ###
